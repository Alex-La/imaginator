import { DataSource } from 'typeorm'

import ImageEntity from '../entities/Image'

const env = process.env

const dbConfig = new DataSource({
    type: 'postgres',
    host: env.API_DB_HOST,
    port: Number(env.API_DB_PORT),
    username: env.API_DB_USER_NAME,
    password: env.API_DB_PASSWORD,
    database: env.API_DB_DATABASE,
    entities: [ImageEntity],
    synchronize: true,
    logging: false,
})

export default dbConfig
