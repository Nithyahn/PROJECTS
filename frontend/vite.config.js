import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // Change this to your desired hostname
    port: 4000, // Change this to your desired port number
  },
});