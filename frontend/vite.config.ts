import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import {viteStaticCopy} from 'vite-plugin-static-copy';
import tailwindcss from '@tailwindcss/vite';
import path from 'path/win32';

// https://vitejs.dev/config/
// export default defineConfig({
//   base: '/universitetaslt/',
//   plugins: [
//     react(),
//     svgr(),
//     viteStaticCopy({
//       targets: [
//         {
//           src: 'src/assets/images/*',
//           dest: 'assets/images'
//         }
//       ]
//     }),
//     tailwindcss()
//   ],
//   server: {
//     port: 3000,
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/universitetaslt/' : '/',
  plugins: [
    react(),
    svgr(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/images/*',
          dest: 'assets/images'
        }
      ]
    }),
    tailwindcss()
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
