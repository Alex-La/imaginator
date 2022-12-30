import {defineConfig, loadEnv} from "vite"
import react from "@vitejs/plugin-react"
import TsconfigPaths from "vite-tsconfig-paths"
import WindiCSS from "vite-plugin-windicss"
import PluginRewriteAll from "vite-plugin-rewrite-all"

export default defineConfig(({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())}

  return {
    server: {
      host: true,
      port: Number(process.env.VITE_CLIENT_PORT),
    },
    preview: {
      port: Number(process.env.VITE_CLIENT_PORT),
    },
    plugins: [react(), TsconfigPaths(), WindiCSS(), PluginRewriteAll()],
  }
})
