<script>
    // import '$css/colors.css';
    import { onMount } from 'svelte';

    onMount(() => {
        const backToTopButton = document.getElementById("bttBtn");
        // let lastScrollPosition = window.scrollY;

        window.addEventListener('scroll', () => {
            // when they scroll down 20px from the top
            if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        });

    });

    function backToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
</script>

<style>
    #bttBtn {
        display: none; 
        position: fixed; 
        bottom: 40px; 
        right: 14.5px; 
        z-index: 99;
        color: var(--txt);
        background-color: var(--glass);
        backdrop-filter: blur(5px);
        border: 1px solid var(--glassBord);
        /* box-shadow: 0px 0px 10px rgba(0,0,0,0.3); */
        cursor: pointer; 
        border-radius: 40px; 
        font-size: 28px; 
        width: 70px; 
        height: 70px;
        text-align: center;
        user-select: none;
        transition-duration: 0.4s;
    }
    
    #bttBtn:hover {
        /* color: var(--txt); */
        background-color: var(--glassHov); 
    }
    
    .bttIcon {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

<button on:click={backToTop} id="bttBtn" title="Back To Top" aria-label="Back To Top">
    <div class="bttIcon">
        <i class="fa-sharp fa-light fa-arrow-up"></i>
    </div>
</button>
