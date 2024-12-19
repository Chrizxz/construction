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

    const dropcheck = document.getElementById('dropcheck');
    const dropdownContent = document.querySelector('.dropdownContent');
    const fries = document.querySelector('.fries');

    dropcheck.addEventListener('change', function() {
        if (this.checked) {
            dropdownContent.classList.add('slide-down');
            dropdownContent.classList.remove('slide-up');
            fries.classList.add('open');
        } else {
            dropdownContent.classList.add('slide-up');
            dropdownContent.classList.remove('slide-down');
            fries.classList.remove('open');
        }
    });

    const label = document.getElementById('dropdownLabel');
    const links = document.querySelectorAll('.dropdownContent a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            label.click();
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.dropdown') && !event.target.closest('.dropbtn2') && dropcheck.checked) {
            dropcheck.checked = false;
            dropdownContent.classList.add('slide-up');
            dropdownContent.classList.remove('slide-down');
            fries.classList.remove('open');
        }
    });