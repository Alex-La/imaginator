import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
import TsconfigPaths from "vite-tsconfig-paths"
import WindiCSS from "vite-plugin-windicss"
import PluginRewriteAll from "vite-plugin-rewrite-all"

export default defineConfig(({mode}) => {
  return {
    server: {
      host: true,
      port: 3000,
    },
    plugins: [react(), TsconfigPaths(), WindiCSS(), PluginRewriteAll()],
  }
})
