import {Repository} from "typeorm"
import ImageEntity, {ImageModel} from "../entities/Image"
import {CreateImageParams} from "../graphql/typeDefs"

class ImagesAPI {
  private repository: Repository<ImageEntity>

  constructor(repository: Repository<ImageEntity>) {
    this.repository = repository
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
