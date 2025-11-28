<title>Residential | Atnip</title>

<script>
    import '$css/global.css';
    import '../page.css';
    import { onMount } from 'svelte';
    import { initProjectImageExpand } from '$lib/projects.js';

    onMount(() => {
        initProjectImageExpand();
    });
</script>

<span class="headspace"></span>

<div class="page">
    <div class="projWrap">
        <h1>Residential Projects</h1>

        <div class="projGrid">
            
            <div class="projSub">
                <div class="projImg">
                        <img src="/imgs/slide2.jpg" alt="Residential">
                    </div>
                <p1> Luxury custom homes, remodels, and additions.</p1>
            </div>

            <div class="projSub">
                    <div class="projImg">
                        <img src="/imgs/slide1.jpg" alt="Barns and Outbuildings">
                    </div>
                <p1> Custom barns, garages, and outbuildings.</p1>
            </div>
            
            <div class="projSub">
                    <div class="projImg">
                        <img src="/imgs/slide3.jpg" alt="Commercial Industrial">
                    </div>
                <p1> Commercial spaces, office buildings, and retail.</p1>
            </div>

        </div>

    </div>
</div>