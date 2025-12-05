import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(), 
        tailwindcss()
    ],
    
    server: {
        proxy: {
            // Forward any requests starting with /api
            '/api': {
                // Target your local Express backend port (it was 5000 in your server.js)
                target: 'http://localhost:5000', 
                // Set the Origin header to the target URL for consistency
                changeOrigin: true,
                
            },
        },
    },
});