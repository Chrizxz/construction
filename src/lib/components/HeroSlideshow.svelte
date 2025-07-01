<script>
    import { onMount } from 'svelte';

    const slides = [
        {
            image: './imgs/slide1.jpg',
            title: 'Atnip Construction',
            subtitle: 'Building Dreams Since 1993',
            position: 'center 40%'  // Add custom position for each slide
        },
        {
            image: './imgs/slide2.jpg',
            title: 'Quality Craftsmanship',
            subtitle: 'Excellence in Every Detail',
            position: 'center 45%'
        },
        {
            image: './imgs/slide3.jpg',
            title: 'Custom Homes',
            subtitle: 'Your Vision, Our Expertise',
            position: 'center 40%'
        }
    ];

    let currentIndex = 0;
    let fadeOut = false;
    let nextIndex = 0;
    let transitioning = false;
    let intervalId;
    let autoplayEnabled = true;
    let mounted = false;

    function stopAutoplay() {
        if (intervalId) {
            clearInterval(intervalId);
            autoplayEnabled = false;
        }
    }

    function nextSlide(manual = false) {
        if (transitioning) return;
        if (manual) stopAutoplay();
        transitioning = true;
        nextIndex = (currentIndex + 1) % slides.length;
        setTimeout(() => {
            currentIndex = nextIndex;
            transitioning = false;
        }, 500);
    } 

    function previousSlide() {
        if (transitioning) return;
        stopAutoplay();
        transitioning = true;
        nextIndex = (currentIndex - 1 + slides.length) % slides.length;
        setTimeout(() => {
            currentIndex = nextIndex;
            transitioning = false;
        }, 500);
    }

    onMount(() => {
        mounted = true;
        intervalId = setInterval(() => {
            if (autoplayEnabled) nextSlide(false);
        }, 4500);
        return () => clearInterval(intervalId);
    });
</script>

<div class="heroSection" class:visible={mounted}>
    <div class="slideContent current">
        <img 
            src={slides[currentIndex].image} 
            alt="Current slide"
            style="object-position: {slides[currentIndex].position}"
        >
        <div class="gradientOverlay"></div>
        <div class="textOverlay">
            <h1>{slides[currentIndex].title}</h1>
            <p>{slides[currentIndex].subtitle}</p>
        </div>
    </div>
    {#if transitioning}
        <div class="slideContent next">
            <img 
                src={slides[nextIndex].image} 
                alt="Next slide"
                style="object-position: {slides[nextIndex].position}"
            >
            <div class="gradientOverlay"></div>
            <div class="textOverlay">
                <h1>{slides[nextIndex].title}</h1>
                <p>{slides[nextIndex].subtitle}</p>
            </div>
        </div>
    {/if}
    <div class="navigationButtons">
        <button class="navButton forward" on:click={() => nextSlide(true)}>
            <span>→</span>
        </button>
        <button class="navButton backward" on:click={previousSlide}>
            <span>←</span>
        </button>
    </div>
</div>

<style>
    .heroSection {
        width: 100vw;
        max-width: 1920px !important;
        max-height: 880px;
        height: calc(100vh - 80px); 
        position: relative;
        background-color: #1a1a1a;
        overflow: hidden;
        opacity: 0;
        transition: opacity .6s ease-in-out;
        margin: 0 auto;
    }

    .heroSection.visible {
        opacity: 1;
    }

    .slideContent {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .slideContent.current {
        opacity: 1;
        z-index: 1;
    }

    .slideContent.next {
        opacity: 0;
        z-index: 2;
        animation: fadeIn 0.5s ease-in-out forwards;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .slideContent img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .gradientOverlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to bottom,
            #786e6e88 30%,
            rgba(0, 0, 0, .8) 100%
        );
        filter: saturate(3);
        z-index: 1;
    }

    .textOverlay {
        position: absolute;
        bottom: 10%;
        left: 3rem;
        color: white;
        z-index: 3;
    }
    
    .textOverlay h1 {
        color: white;
        text-align: left;
    }

    .textOverlay p {
        font-size: 1.5rem;
        margin-top: .5rem;
        transform: translate(.3rem, .2rem);
    }

    .navigationButtons {
        position: absolute;
        bottom: 2rem;
        right: 4rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        z-index: 4;
    }

    .navButton {
        width: 3rem;
        height: 3rem;
        border: none;
        background-color: rgba(0, 0, 0, 0.5);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease;
    }

    .navButton span {
        color: white;
        font-size: 1.2rem;
        user-select: none;
    }

    .navButton:hover {
        background-color: rgba(0, 0, 0, 1);
    }

    .navButton:active {
        background-color: rgba(0, 0, 0, 1);
    }

    @media only screen and (max-width: 768px) {
        .heroSection {
            height: 100vh;
        }
        
        .textOverlay {
            text-align: center;
            left: 50%;
            transform: translate(-50%, -100%);
        }

        .textOverlay h1 {
            text-align: center;
            margin-bottom: 0rem;
        }
        
        .textOverlay p {
            transform: translate(0, 0);
        }

        .navigationButtons {
            bottom: 1rem;
            right: 1rem;
        }
    }
</style>
