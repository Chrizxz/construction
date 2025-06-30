<script>
    import '$css/global.css';
    import { page } from '$app/stores';
</script>

<div class="wipPage">
    <span class="headBg">
        <i class="fa-solid fa-gear fa-spin" style="animation-duration: 10s;"></i>
    </span>
    <h1 class="wipCode">Under Construction..</h1>
    <p>This page is being worked on. Please check back later.</p>
    <a href="/">HOME</a>
</div>

<style>
    .wipPage {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 80vh;
        text-align: center;
        color: var(--txtB);
    }

    .headBg {
        position: absolute;
        left: 50%;
        font-size: 4.4rem;
        font-weight: 700;
        font-family: 'Instruments Sans', sans-serif;
        transform: translateX(-50%);
        opacity: 0.1;
        z-index: -1;
        font-size: 50rem !important;
    }

    .wipCode {
        font-size: 6rem;
        margin-bottom: 1rem !important;
    }

    .wipPage p {
        font-size: 1.2rem !important;
        margin-bottom: 1.5rem;
    }

    .wipPage a {
        color: var(--txtB);
        background-color: var(--main2);
        padding: 1rem 3rem;
        color: var(--txtW);
        transition: background-color 0.2s ease-in-out;
    }

    .wipPage a:hover {
        color: var(--txtW);
        background-color: var(--main3);
    }

    @media (max-width: 1550px) {
        .headBg {
            font-size: 60vw !important;
        }
    }

    @media (max-width: 760px) {
        .wipCode {
            font-size: 2.8rem !important;
            line-height: 3rem !important;
        }
    }
</style>