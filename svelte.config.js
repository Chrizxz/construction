import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(
			{
				fallback: '404.html',
			}
		),
		appDir: 'app',
		prerender: {
            handleHttpError: () => {
                return;
            }
        }
	}
};

export default config;
