import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // Set the output directory
    minify: 'terser', // Use Terser for minification (default)
    target: 'esnext', // Target ESNext to leverage modern JavaScript features
    sourcemap: true // Generate source maps for debugging
  },
  plugins: [react()],
  server: {
    port: 3001 // Set the development server port
  }
});
