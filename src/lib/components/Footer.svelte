<script>
    import '$css/colors.css';
    // import '$css/buttons.css';
    // import { onMount } from 'svelte';
    let currentYear = new Date().getFullYear();
    currentYear -= 2000;
</script>

<style>
    .housesBanner {
        background-image: url('/housesBanner.svg');
        width: 100%;
        height: 140px;
        background-size: auto 100%;
        background-repeat: repeat-x;
        background-position: bottom;
    }
    
    .footWrap {
        display: flex;
        justify-content: center;
        padding-top: 6rem;
        padding-bottom: 4rem;
        font-size: 12px;
        margin: 0 auto;
        width: 100%;
        flex-direction: column;
    }

    .footUp {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .footLogo {
        background-image: url('/atnipLogo.svg');
        width: 150px;
        height: 100px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    /* .footLMiddle {
        width: 100%;
    } */

    .footLinks {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .footLinks a {
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: 500;
    }

    .footLinks a:nth-child(2) {
        margin: 0 1rem;
        font-size: 1.2rem;
        font-weight: 500;
    }

    .footDown {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-top: 2rem;
    }

    .footDown p {
        white-space: nowrap;
        font-size: 1.1rem;
        font-weight: 500;
        margin: 0;
    }
    
    .footDown span {
        font-size: .85rem;
        white-space: nowrap;
    }

    @media (max-width: 700px) {
        .footWrap {
            padding-top: 4rem;
            padding-bottom: 2rem;
        }

        .footUp {
            flex-direction: column;
            align-items: center;
        }

        .footLogo {
            width: 160px;
            height: 80px;
        }

        .footLinks {
            margin-top: 1rem;
            flex-direction: column;
        }

        .footLinks a {
            font-size: 1.1rem;
            margin: .5rem 0 !important;
        }

        /* .footLinks a:nth-child(2) {
            margin: .5rem 0;
        } */

        .footDown {
            flex-direction: column;
            align-items: center;
            margin-top: 2rem;
        }

        .footDown p {
            font-size: .85rem;
        }

        .footDown span {
            font-size: .75rem;
        }
    }

    @media (min-width: 640px) {
        .footWrap {
            max-width: 640px;
        }
    }

    @media (min-width: 768px) {
        .footWrap {
            max-width: 768px;
        }
    }

    @media (min-width: 1024px) {
        .footWrap {
            max-width: 1024px;
        }
    }

    @media (min-width: 1280px) {
        .footWrap {
            max-width: 1280px;
        }
    }

    @media (min-width: 1536px) {
        .footWrap {
            max-width: 1536px;
        }
    }
</style>

<footer>
    <div class="housesBanner"></div>
    <div class="footWrap">
        <div class="footUp">
            <div class="footLogo"></div>
            <!-- <span class="footLMiddle"></span> -->
            <div class="footLinks">
                <!-- <a href="/privacy-policy">Privacy Policy</a> -->
                <a href="/about">About Us</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
        <div class="footDown">
            <p>Building Dreams Since 1993</p>
            <!-- <span class="footSpace"></span> -->
            <span>©2021-{currentYear} Atnip Construction LLC. All rights reserved.</span>
        </div>
    </div>
</footer>