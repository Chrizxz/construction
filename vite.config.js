import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
        alias: {
            '@': path.resolve('src'),
            $css: path.resolve('./src/css')
        }
    }
});
