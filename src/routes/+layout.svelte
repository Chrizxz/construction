<script>
	import { fade } from 'svelte/transition';
	import BackToTopButton from '$lib/components/BackToTop.svelte';
	import NavigationBar from '$lib/components/NavigationBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
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
</style>