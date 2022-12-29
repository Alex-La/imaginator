import {config, DotenvConfigOptions} from "dotenv"
import {expand} from "dotenv-expand"
import path from "path"
import fs from "fs"

const NODE_ENV = process.env.NODE_ENV

const envDevPath = path.resolve(process.cwd(), ".env.development")

let envPath: string

if (NODE_ENV === "development") envPath = envDevPath

if (envPath && !fs.existsSync(envPath)) {
  const message = `Please, provide ${NODE_ENV} environment.`
  throw new Error(message)
}

const envConfig: DotenvConfigOptions = {
  path: envPath,
}

export default expand(config(envConfig))
