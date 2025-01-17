<script>
    import '$css/colors.css';
    // import '$css/navbar.css';
    import { onMount } from 'svelte';

    onMount(() => {
        // des navbar fixed on scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            // scrolling down
            if (window.scrollY > 50) {
                navbar.classList.add('fixed');
                return;
            }
            // scrolling up
            navbar.classList.remove('fixed');
        });

        // mob dropdown
        const mobDropcheck = document.getElementById('mobDropcheck');
        const mobDropdownContent = document.querySelector('.mobDropContent');
        const fries = document.querySelector('.fries');
        mobDropcheck.addEventListener('change', function() {
            if (this.checked) {
                mobDropdownContent.classList.add('slide-down');
                mobDropdownContent.classList.remove('slide-up');
                fries.classList.add('open');
            } else {
                mobDropdownContent.classList.add('slide-up');
                mobDropdownContent.classList.remove('slide-down');
                fries.classList.remove('open');
            }
        });

        // des dropdown
        const desDropdowns = document.querySelectorAll('.desDrop');
        desDropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseenter', () => {
                dropdown.querySelector('.desDropItems').style.display = 'block';
            });
            dropdown.addEventListener('mouseleave', () => {
                dropdown.querySelector('.desDropItems').style.display = 'none';
            });
        });

        // mob dropdown item toggle
        const mobDropdowns = document.querySelectorAll('.mobDropContent > a');
        mobDropdowns.forEach(link => {
            link.addEventListener('click', (event) => {
                const nextElement = link.nextElementSibling;
                if (nextElement && nextElement.classList.contains('mobDropItems')) {
                    event.preventDefault();
                    nextElement.classList.toggle('show');
                }
            });
        });

        // mob sub links toggle
        const subLinks = document.querySelectorAll('.mobDropItems a');
        subLinks.forEach(subLink => {
            subLink.addEventListener('click', () => {
                const parentDropdown = subLink.closest('.mobDropItems');
                if (parentDropdown) {
                    parentDropdown.classList.toggle('show');
                }
            });
        });

        // mob close dropdown on link click
        const label = document.getElementById('mobDropdownLabel');
        const links = document.querySelectorAll('.mobDropContent .normLink');
        links.forEach(link => {
            link.addEventListener('click', () => {
                label.click();
            });
        });

        // mob close dropdown on outside click
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.mobNavWrap') && !event.target.closest('.mobDropbtn2') && mobDropcheck.checked) {
                mobDropcheck.checked = false;
                mobDropdownContent.classList.add('slide-up');
                mobDropdownContent.classList.remove('slide-down');
                fries.classList.remove('open');
            }
        });
    });
</script>

<!--Navbar-->
<nav id="navbar">
    <!--mobile view-->
    <div class="mobNavWrap">
        <input id="mobDropcheck" class="mobDropcheck" type="checkbox"/>
        <h1>
            <div class="mobDropdownWrap">
                <a href="/" title="Logo" class="mobLogoWrap">
                    <img class="mobLogo" src="atnipLogo.svg" alt="Logo"/>
                    <!-- <span>Atnip</span> -->
                </a>
                <label id="mobDropdownLabel" for="mobDropcheck" class="mobDropbtn2">
                    <!-- svelte-ignore a11y_missing_attribute -->
                    <a class="friesWrap clickit" title="Navigation Button" aria-label="Navigation Button">
                        <div class="fries">
                            <div class="line"></div>
                            <div class="line line2"></div>
                            <div class="line"></div>
                        </div>                              
                    </a>
                </label>
            </div>
        </h1>
        <div class="mobDropContent">
            <a href="/" title="Projects" aria-label="Projects">Projects</a>
            <div class="mobDropItems">
                <a href="/" title="Sub Project 1" class="normLink" aria-label="Sub Project 1">Sub Project 1</a>
                <a href="/" title="Sub Project 2" class="normLink" aria-label="Sub Project 2">Sub Project 2</a>
            </div>
            <a href="/" title="Contact Us" class="normLink" aria-label="Contact">Contact Us</a>
            <a href="/" title="Who We Are" class="normLink" aria-label="Other Links">Who We Are</a>
        </div>
    </div>
    <!--desktop view-->
    <div class="desNavWrap">
        <ul class="links">
            <a class="desLogo" href="/" rel="noopener noreferrer">
                <img src="atnipLogo.svg" alt="Logo"/>
                 <!-- <span>Atnip</span> -->
            </a>
            <div>
                <li class="desDrop">
                    <a href="/" title="Projects" aria-label="Projects">Projects</a>
                    <div class="desDropItems">
                        <a href="/" title="Sub Project 1" aria-label="Sub Project 1">Sub Project 1</a>
                        <a href="/" title="Sub Project 2" aria-label="Sub Project 2">Sub Project 2</a>
                    </div>
                </li>
                <li><a href="/" title="Contact Us" aria-label="Contact Us">Contact Us</a></li>
                <li><a href="/" title="Who We Are" aria-label="Who We Are">Who We Are</a></li>
            </div>
        </ul>
    </div>
</nav>

<style>
.mobDropcheck {
    display: none;
}

.mobDropContent {
    display: none;
    box-shadow: none;
}

nav {
    user-select: none;
}

/* Mobile view */
@media only screen and (max-width: 650px) {
    .links {
        display:none;
    }
    
    .friesWrap {
        cursor: pointer;
        width: 100%;
    }

    .mobDropdownWrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100vw;
    }

    .mobDropbtn2 {
        margin-right: 18px;
    }

    .clickit {
        transition: opacity .2s ease-in-out;
    }

    .mobDropContent {
        display: none;
        text-align: center;
        min-width: 160px;
        z-index: -1 !important;
        position: absolute;
        width: 100vw !important;
        background: var(--navBar); /* color */
        /* position: relative; */
        box-shadow: 0 0 0rem 0rem rgba(0,0,0,0);
    }

    .mobDropContent a {
        color: var(--txt);
        font-weight: 400;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    /* .mobDropContent a:nth-child(4) {
        padding: 6px 16px;
    } */

    /* .mobDropContent .icons {
        display: inline-block;
        padding: 1em 10px !important;
        transition: transform .3s ease-in-out;
        color: var(--txt);
    } */

    .mobDropContent .mobDropItems {
        display: none;
        background: var(--navBarAlt); /* color */
    }

    .mobDropContent .mobDropItems a {
        padding: 8px 16px;
    }

    .mobDropContent .mobDropItems.show {
        display: block;
    }

    .mobDropcheck {    
      position: absolute;
      left: -9999px;
    }

    nav h1 {
        background: var(--navBar); /* color */
        border-bottom: 1px solid var(--navOutline);
    }

    .slide-down {
        display: block;
        animation: mobSlideDown .5s forwards, mobSlideDownShadow .5s forwards;
        transition: all .5s ease-in-out;
    }
    
    .slide-up {
        display: block;
        animation: mobSlideUp .5s forwards, mobSlideUpShadow .5s forwards;
        transition: all .5s ease-in-out;
    }
    
    @keyframes mobSlideDown {
        0% {transform: translateY(-100vh);}
        100% {transform: translateY(-.5vh);}
    }

    @keyframes mobSlideDownShadow {
        55% {box-shadow: 0 0 0rem 40rem rgba(0,0,0,0);}
        100% {box-shadow: 0 0 0rem 40rem rgba(0,0,0,0.5);}
    }
    
    @keyframes mobSlideUp {
        0% {transform: translateY(-.5vh);}
        100% {transform: translateY(-100vh);}
    }

    @keyframes mobSlideUpShadow {
        0% {box-shadow: 0 0 0rem 40rem rgba(0,0,0,0.5);}
        23.5% {box-shadow: 0 0 0rem 40rem rgba(0,0,0,0);}
    }

    .mobLogo {
        width: 100%;
    }
    
    .mobLogoWrap {
        text-align: left !important;
        width: 25%;
        margin-left: 18px;
    }

    /* .mobLogoWrap span {
        font-size: 32px !important;
        font-family: 'Instrument Sans', serif;
        font-weight: 700;
    } */
    
    nav {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
    
    nav div:first-child h1 {
        line-height: 0;
        padding: 5% 0 !important;
        margin:-20px 1rem;
        display: block !important;
    } 

    nav div:first-child h1, nav ul{
        margin:0;
    }

    .friesWrap:first-child {
        display: flex;
        justify-content: space-between;
    }
    
    #navbar {
        position: fixed !important;
        top: 0px !important;
    }
    
    nav {
        z-index: 99 !important;
        position: relative;
    }
    
    .fixed {
        top: 0px !important;
        animation: none !important;
        transform: none !important;
        width: 100% !important;
        border: none !important;
        box-shadow: none !important;
    }

    .fries {
        display: block;
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
    }

    .line {
        width: 20px;
        height: 3px;
        background-color: var(--txt);
        margin: 2.5px 0;
        transition: 0.4s;
        border-radius: 1vw;
    }

    .line2 {
        width: 10px !important;
    }

    .fries.open .line:nth-child(1) {
        transform: rotate(-45deg) translate(-5.3px, 6px);
    }

    .fries.open .line:nth-child(2) {
        opacity: 0;
    }

    .fries.open .line:nth-child(3) {
        transform: rotate(45deg) translate(-5.3px, -6px);
    }
}

/* Desktop View */
.desLogo img {
    float: left;
    text-align: left;
    width: 100px;
    height: auto;
    padding: 15px 5px;
    padding-bottom: 22px !important;
}

/* .desLogo span {
    font-size: 1.8rem;
    margin: 0 0rem !important;
    line-height: 3rem;
    font-weight: 800;
    color: var(--txt);
} */

.links {
    padding-left: 0px !important;
}

nav ul div li:last-child a {
    margin-right: 0;
}

nav div:first-child h1 {
    display: none;
}
    
.desNavWrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

/* .separator {
    color: var(--txt);
    margin-left: .5rem;
    margin-right: .5rem;
    margin-bottom: .2rem;
} */

ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    width: 100%;
}

nav ul div {
    display: flex;
}

nav ul li {
    border-bottom:none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
}

/* separator */
/* nav ul li span {
    font-weight: 200 !important;
    opacity: .4;
} */

nav ul li a {
    position: relative;
    color: var(--txt);
    text-decoration: none;
    margin: .8rem 1rem;
    display: block;
    line-height: 25px;
    font-weight: 400 !important;
}

nav ul li a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    /* border-radius: 10px; */
    bottom: 0px;
    left: 0;
    background-color: var(--txt);
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.15s ease-in-out;
}

nav ul li a:hover:before {
    visibility: visible;
    transform: scaleX(1);
}
     
#navbar {
    position: sticky;
    z-index: 2;
}

.fixed {
    position: fixed;
    top: -200px;
    width: 100%;
    animation: slideDown .5s;
    animation-fill-mode: forwards, none;
    background: var(--navBar); /* color */
    box-shadow: 0 -1rem 0rem 0rem white;
    border-bottom: 1px solid var(--navOutline);
    /* transform: translateX(-10rem); */
    z-index: 50 !important;
}

/* .fixed .separator {
    color: var(--txt);
} */

.fixed .desLogo img {
    float: left;
    text-align: left;
    width: 100px;
    height: auto;
    padding: 15px 5px;
    padding-bottom: 15px !important;
    transform: translateY(-2px);
}

.desDrop .desDropItems {
    display: none;
    position: absolute;
    transform: translate(0, 70%);
    background: var(--navBar); /* color */
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    z-index: 1;
}

.desDrop > a:hover + .desDropItems {
    display: block;
}

/* .desDrop a {
    color: var(--txt);
    padding: 12px 16px;
    text-decoration: none;
    display: block;
} */

.desDrop .desDropItems {
    display: none;
    background: var(--navBar); /* color */
}

/* .desDrop .desDropItems a {
    padding: 8px 16px;
} */

.desDrop .desDropItems.show {
    display: block;
}

@keyframes slideDown {
    1% {top: -200px;}
    100% {top: 1.5%;}
}

@media (min-width: 640px) {
    .desNavWrap {
        max-width: 640px;
    }
}

@media (min-width: 768px) {
    .desNavWrap {
        max-width: 768px;
    }
}

@media (min-width: 1024px) {
    .desNavWrap {
        max-width: 1024px;
    }
}

@media (min-width: 1280px) {
    .desNavWrap {
        max-width: 1280px;
    }
}

@media (min-width: 1536px) {
    .desNavWrap {
        max-width: 1536px;
    }
}
</style>