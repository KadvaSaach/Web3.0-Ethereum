import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://kadvasaach.github.io/Web3.0-Ethereum/',
  plugins: [react()],
});
