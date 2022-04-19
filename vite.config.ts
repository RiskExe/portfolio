import { resolve } from 'path';
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
	base: '/portfolio/',
	root,
	build: {
		outDir,
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(root, 'index.html'),
				skydiving: resolve(root, 'skydiving', 'index.html')
			}
		}
	},
	server: { port: 3001 },
});
