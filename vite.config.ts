import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Algorise4IR/', // Correct base path for GitHub Pages
  plugins: [react()],
});
