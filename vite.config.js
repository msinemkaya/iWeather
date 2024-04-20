import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [ react() ],
    define: {
      'process.env.VITE_WEATHER_API_KEY':
        JSON.stringify(env.VITE_WEATHER_API_KEY),
    },
    server: {
      host: true,
    },
    base: '/iWeather/',
  }
})
