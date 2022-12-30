import {RESTDataSource} from "@apollo/datasource-rest"
import {Repository} from "typeorm"
import ImageEntity, {ImageModel} from "../entities/Image"
import {CreateImageParams} from "../graphql/typeDefs"

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
      const query = this.repository.createQueryBuilder("image")
      query.select("MAX(image.id)", "id")
      const {id} = await query.getRawOne<{id: number}>()
      console.log(id)
      const path = `/id/${id !== null ? id + 1 : 0}/400/600`
      await this.get(path)
      return this.baseURL + path
    } catch (e) {
      if (e.extensions.response.status === 404) throw new Error(e.message)
    }
  }

  async findAllImages(): Promise<ImageModel[]> {
    return await this.repository.find()
  }

  async findImageById(id: number): Promise<ImageModel | null> {
    return await this.repository.findOneBy({id})
  }

  async createImage({id, path, state}: CreateImageParams): Promise<ImageModel> {
    const image = new ImageEntity()
    image.id = id
    image.path = path
    image.state = state

    await this.repository.save(image)

    return image
  }

  async removeImage(id: number): Promise<ImageModel> {
    const image = await this.repository.findOneBy({id})
    const temp = {...image}

    await this.repository.remove(image)

    return temp
  }
}

export default ImagesAPI
