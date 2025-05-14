
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/consulta_imei/consulta-imei-migracion/dist/',
})
