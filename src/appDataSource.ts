import {DataSource} from "typeorm"

import Image from "./entities/Image"

const appDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "qwe123ewq321",
  database: "imaginator",
  entities: [Image],
  synchronize: true,
  logging: false,
})

export default appDataSource
