import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-static generates a static site for deployment
		// See https://svelte.dev/docs/adapter-static for more information
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // or a specific fallback page, e.g., '200.html'
			precompress: false,
			strict: true
		}),
		paths: {
			base: dev ? '' : '/construction'
		}
	}
};

export default config;
