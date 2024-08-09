import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import requireTransform from 'vite-plugin-require-transform'
import tsconfigPaths from 'vite-tsconfig-paths'

const ReactCompilerConfig = {
  sources: (filename: string) => {
    return filename.indexOf('src/') !== -1
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
      },
    }),
    requireTransform({
      fileRegex: /.js$|.jsx$|.ts$|.tsx$/,
    }),
    tsconfigPaths(),
  ],
})
