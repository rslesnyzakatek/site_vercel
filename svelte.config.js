import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $lib: './src/lib',
    },
    prerender: {
      handleHttpError: 'warn' // nie przerywaj builda przy 404
    }
  },
  preprocess: vitePreprocess()
};

export default config;
