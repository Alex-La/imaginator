import {defineConfig, loadEnv} from "vite"
import _ from "lodash"
import react from "@vitejs/plugin-react"
import TsconfigPaths from "vite-tsconfig-paths"
import WindiCSS from "vite-plugin-windicss"
import PluginRewriteAll from "vite-plugin-rewrite-all"

export default defineConfig(({mode}) => {
  if (mode === "development") {
    const env = loadEnv(mode, process.cwd(), "")
    const isEnvEmpty = _.isEmpty(env)
    if (isEnvEmpty) throw new Error(`Please, provide ${mode} env config.`)
  }

  return {
    server: {
      host: true,
      port: Number(process.env.CLIENT_PORT),
    },
    preview: {
      port: Number(process.env.CLIENT_PORT),
    },
    plugins: [react(), TsconfigPaths(), WindiCSS(), PluginRewriteAll()],
  }
})
