import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import Svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import dns from 'dns';
dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/stylesheets/variables/mediaBreakpoints.scss" as *;',
      },
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  },
  plugins: [
    Svgr({
      svgrOptions: { exportType: 'default' },
    }),
    react(),
    tsconfigPaths(),
  ],
  build: {
    outDir: 'build',
  },
});
