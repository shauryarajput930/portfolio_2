import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
 
export default defineConfig(({ command, mode }) => {
 
  const isGitHub = process.env.GITHUB_PAGES === 'true'

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    base: isGitHub
      ? '/Portfolio/'  
      : '/',           
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
})
