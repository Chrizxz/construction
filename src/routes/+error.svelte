<script>
    import '$css/global.css';
    import { page } from '$app/stores';
</script>

<div class="errorPage">
    <h1 class="headBg">{$page.status}</h1>
    <h1 class="errorCode">{$page.status}</h1>
    <p>Err: {$page.error.message}</p>
    <a href="/">HOME</a>
</div>

<style>
    .errorPage {
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
        transform: translateX(-50%);
        opacity: 0.1;
        z-index: -1;
        font-size: 50rem !important;
    }

    .headBg 

    .errorCode {
        font-size: 6rem !important;
        margin-bottom: 1rem !important;
    }

    .errorPage p {
        font-size: 1.2rem !important;
        margin-bottom: 1.5rem;
    }

    .errorPage a {
        color: var(--txtB);
        background-color: var(--main2);
        padding: 1rem 3rem;
        color: var(--txtW);
        transition: background-color 0.2s ease-in-out;
    }

    .errorPage a:hover {
        color: var(--txtW);
        background-color: var(--main3);
    }

    @media (max-width: 1550px) {
        .headBg {
            font-size: 50vw !important;
        }
    }
</style>