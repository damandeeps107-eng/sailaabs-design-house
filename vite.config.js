import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    allowedHosts: true // Allows all tunnel hosts (trycloudflare, loca.lt, etc.)
  }
});
