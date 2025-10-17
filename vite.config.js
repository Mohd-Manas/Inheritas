// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '4c52a209-f34e-4527-9472-6319c5b70564-00-2ovptkt9f6vwm.pike.replit.dev'
    ],
    host: true, // optional: allows external access (Replit preview)
  },
})
