<script>
    import '$css/colors.css';
    import '$css/navbar.css';
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
                mobDropcheck.addEventListener('click', () => {
                    label.click();
                });
            }
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
                    <img class="mobLogo" src="imgs/atnipLogo.svg" alt="Logo"/>
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
                <a href="/" title="Projects Content" class="normLink" aria-label="Projects Content">Projects Content</a>
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
                <img src="imgs/atnipLogo2.svg" alt="Logo"/>
                 <!-- <span>Atnip</span> -->
            </a>
            <div>
                <li class="desDrop">
                    <a href="/" title="Projects" aria-label="Projects">Projects<i class="fa-sharp-duotone fa-solid fa-angle-down"></i></a>
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

