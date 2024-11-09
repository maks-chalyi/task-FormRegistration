import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { resolve } from 'path'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
	plugins: [
		react(),
		svgr(),
		ViteImageOptimizer({
			jpg: {
				quality: 40
			},
			png: {
				quality: 40
			},
			jpeg: {
				quality: 40
			},
			gif: {},
			webp: {
				lossless: true
			}
		})
	],
	build: {
		rollupOptions: {
			input: {
				index: resolve(__dirname, 'index.html'),
				contacts: resolve(__dirname, 'contacts/index.html'),
			}
		}
	}
})