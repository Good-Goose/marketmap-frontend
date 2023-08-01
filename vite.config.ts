import svg from '@neodx/svg/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svg({
      root: 'src/assets',
      metadata: 'src/components/ui/icon/sprite.gen.ts',
      group: true,
      output: 'public',
    }),
  ],
})
