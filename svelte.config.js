import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$lib: './src/lib'
		},
		prerender: {
			handleHttpError: 'warn' // nie przerywaj builda przy 404
		}
	},

	preprocess: [vitePreprocess(), mdsvex({
		extensions: ['.svx', '.md'],
	})],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
