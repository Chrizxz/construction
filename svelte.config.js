import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-static generates a static site for deployment
		// See https://svelte.dev/docs/adapter-static for more information
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // or a specific fallback page, e.g., '200.html'
			precompress: false,
			strict: true
		})
	}
};

export default config;
