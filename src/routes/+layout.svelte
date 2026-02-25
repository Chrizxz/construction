<script>
	import { fade } from 'svelte/transition';
	import BackToTopButton from '$lib/components/BackToTop.svelte';
	import NavigationBar from '$lib/components/NavigationBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
    import { initProjectImageExpand } from '$lib/projects.js';

    onMount(() => {
        initProjectImageExpand();
    });
	import '$css/global.css';
	import '$lib/global.js';
	// import '$css/colors.css';
	export let data;
</script>

<NavigationBar/>
<div class="container">
	<!-- <BackToTopButton/> -->
	<main>
		{#key data.pathname}
			<div in:fade={{ duration: 200, delay: 400 }} out:fade={{ duration: 0 }}>
				<slot />
			</div>
		{/key}
	</main>
</div>
<Footer/>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

	:global(.headspace) {
		width: 80px;
		height: 10rem;
		display: block;
	}

	:global(.page) {
		margin: 0 auto;
		min-height: 100vh;
    	width: 100%;
	}
	
	@media (max-width: 640px) {
		:global(.page) {
			max-width: calc(100% - 36px);
		}
	}

	@media (min-width: 640px) {
		:global(.page) {
			max-width: 640px;
		}
	}

	@media (min-width: 768px) {
		:global(.page) {
			max-width: 768px;
		}
	}

	@media (min-width: 1024px) {
		:global(.page) {
			max-width: 1024px;
		}
	}

	@media (min-width: 1280px) {
		:global(.page) {
			max-width: 1280px;
		}
	}

	@media (min-width: 1536px) {
		:global(.page) {
			max-width: 1436px;
		}
	}
</style>