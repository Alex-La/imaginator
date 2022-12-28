import {DataSource} from "typeorm"

import ImageEntity from "../entities/Image"

const dbConfig = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "qwe123ewq321",
  database: "imaginator",
  entities: [ImageEntity],
  synchronize: true,
  logging: false,
})

export default dbConfig