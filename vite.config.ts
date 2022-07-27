import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import WindiCSS from 'vite-plugin-windicss'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [
    vue(),
    ssr(),
    WindiCSS(
      {
      scan: {
        // By default only `src/` is scanned
        dirs: ["pages", "components"],
        // We only have to specify the file extensions we actually use.
        fileExtensions: ["vue", "js", "ts", "jsx", "tsx"]
      }
    }
    ),
  ],
}

export default config
