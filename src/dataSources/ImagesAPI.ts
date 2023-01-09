import { RESTDataSource } from '@apollo/datasource-rest'
import { Repository } from 'typeorm'
import ImageEntity, { ImageModel } from '../entities/Image'
import { CreateImageParams } from '../graphql/typeDefs'
import { randIntExcep } from '../utils'

const API_PICSUM_URL = process.env.API_PICSUM_URL

class ImagesAPI extends RESTDataSource {
    override baseURL = API_PICSUM_URL

    private repository: Repository<ImageEntity>

    constructor(repository: Repository<ImageEntity>) {
        super()

        this.repository = repository
    }

    async getPicsumPhoto() {
        try {
            const query = this.repository.createQueryBuilder('image')

            query.select('image.id', 'id')
            const raws = await query.getRawMany<{ id: number }>()
            const ids = raws.map(r => r.id)

            query.select('Max(image.id)', 'maxId')
            const { maxId } = await query.getRawOne<{ maxId: number }>()

            let id: number

            if (maxId == null) id = 0
            else {
                if (ids.length - 1 === maxId) {
                    const nextId = maxId + 1
                    await this.get(`/id/${nextId}/400/600`)
                    id = nextId
                } else id = randIntExcep(0, maxId, ids)
            }

            return this.baseURL + `/id/${id}/400/600`
        } catch (e) {
            if (e.extensions.response.status === 404) throw new Error(e.message)
        }
    }

    async findAllImages(): Promise<ImageModel[]> {
        return await this.repository.find()
    }

    async findImageById(id: number): Promise<ImageModel | null> {
        return await this.repository.findOneBy({ id })
    }

    async createImage({ id, path, state }: CreateImageParams): Promise<ImageModel> {
        const image = new ImageEntity()
        image.id = id
        image.path = path
        image.state = state

        await this.repository.save(image)

        return image
    }

    async removeImage(id: number): Promise<ImageModel> {
        const image = await this.repository.findOneBy({ id })
        const temp = { ...image }

        await this.repository.remove(image)

        return temp
    }
}

export default ImagesAPI
