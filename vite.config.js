import { defineConfig } from 'vite';

export default defineConfig({
  base: '/sailaabs-design-house/',
  server: {
    host: true,
    port: 5173,
    allowedHosts: true
  }
});
