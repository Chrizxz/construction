# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

```js
import path from 'path';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
	plugins: [
		postcssImport({
			resolve(id) {
				if (id.startsWith('@/')) {
					return path.resolve(__dirname, 'src/css', id.slice(2));
				}
				return id;
			}
		}),
		autoprefixer
	]
};
```

Major Updates and Adjustments

- Added a package to support alias paths in CSS
- Modified vite.config.js to enable CSS aliasing
- Updated colors.css with 8 minor changes
- Refactored global.css with 95 major changes
- Improved navbar.css with 42 meaningful updates
- Tweaked Footer.svelte (4 changes)
- Updated NavigationBar.svelte (6 changes)
- Revised +layout.svelte with 13 layout-related changes
- Overhauled +page.svelte with 113 major changes
- Added new component: HeroSlideshow.svelte
- Added new stylesheet: page.css
- Moved SVGs to root static folder:
- atnipLogo.svg, atnipLogo2.svg, housesBanner.svg
- linesBg.svg, linesBg2.svg, orangeHouse.svg
- Added 7 IMG_* images
- Added 3 slideshow images: slide1.jpg, slide2.jpg, slide3.jpg
- Added 2 trust section images
- Added 1 image of unfinished house