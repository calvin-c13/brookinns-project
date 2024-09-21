import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port:
    proxy: {
      '/api': {
<<<<<<< Updated upstream
        target: 'http://localhost:5174',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
=======
        target: 'http://localhost:3001', // Updated port to match Express server port
        secure: false
>>>>>>> Stashed changes
      },
    },
  },

  plugins: [react()],
});
