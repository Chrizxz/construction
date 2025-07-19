import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-static generates a static site for deployment
		// See https://svelte.dev/docs/adapter-static for more information
		adapter: adapter(),
		prerender: {
            handleHttpError: () => {
                return;
            }
        }
	}
};

export default config;
