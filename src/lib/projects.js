export function initProjectImageExpand() {
    if (typeof window === 'undefined') return;
    
    if (window.__projExpandInitialized) return;
    window.__projExpandInitialized = true;

    let currentOpen = null;
    const body = document.body;

    function createOverlay() {
        let overlay = document.querySelector('.proj-overlay[data-proj-global]');
        if (overlay) return overlay;
        overlay = document.createElement('div');
        overlay.className = 'proj-overlay';
        overlay.setAttribute('data-proj-global', '1');
        overlay.style.display = 'none';
        document.body.appendChild(overlay);
        return overlay;
    }

    function openItem(item) {
        if (currentOpen === item) return;
        if (currentOpen) closeCurrent();

        const overlay = createOverlay();
        overlay.innerHTML = '';

        // cloning
        const srcImg = item.querySelector('.projImg img');
        const projImgWrapper = document.createElement('div');
        projImgWrapper.className = 'projImg';

        if (srcImg) {
            const cloned = srcImg.cloneNode(true);
            cloned.removeAttribute('width');
            cloned.removeAttribute('height');
            projImgWrapper.appendChild(cloned);
        }

        // close button 
        const closeBtn = document.createElement('button');
        closeBtn.className = 'imgOpen';
        closeBtn.setAttribute('aria-label', 'Close image');
        closeBtn.innerHTML = '<i class="fa-solid fa-x"></i>';

        overlay.appendChild(closeBtn);
        overlay.appendChild(projImgWrapper);

        overlay.style.display = 'flex';
        body.style.overflow = 'hidden';
        item.classList.add('is-open');
        currentOpen = item;
    }

    function closeCurrent() {
        if (!currentOpen) return;
        const overlay = document.querySelector('.proj-overlay[data-proj-global]');
        if (overlay) {
            overlay.style.display = 'none';
            overlay.innerHTML = '';
        }
        currentOpen.classList.remove('is-open');
        currentOpen = null;
        body.style.overflow = '';
    }

    // click inside .projImg / close when click overlay or close button
    const onClick = (e) => {
        const btn = e.target.closest('button.imgOpen');
        if (btn) {
            closeCurrent();
            return;
        }

        const projImg = e.target.closest('.projImg');
        if (projImg) {
            const parent = projImg.closest('.projSub');
            if (parent) {
                // if already open, ignore
                if (parent.classList.contains('is-open')) return;
                openItem(parent);
                e.preventDefault?.();
            }
            return;
        }

        // if clicking the overlay background (outside the image), close it
        const overlay = e.target.closest('.proj-overlay');
        if (overlay && e.target === overlay) {
            closeCurrent();
        }
    };

    const onKey = (e) => {
        if (e.key === 'Escape') closeCurrent();
    };

    document.addEventListener('click', onClick, { passive: false });
    document.addEventListener('keydown', onKey);

    // body overflow reset on unload
    window.addEventListener('beforeunload', () => { body.style.overflow = ''; });

    // xpose programmatic API
    return { openItem, closeCurrent };
}
