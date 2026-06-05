(function () {
    // Preheader close
    var closeBtn = document.getElementById('close-preheader');
    var preheader = document.getElementById('preheader');
    var siteHeader = document.querySelector('.site-header');

    if (closeBtn && preheader) {
        closeBtn.addEventListener('click', function () {
            preheader.style.display = 'none';
            if (siteHeader) {
                siteHeader.classList.add('preheader-closed');
            }
        });
    }

    if (siteHeader && preheader) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                siteHeader.classList.add('hide-preheader');
            } else {
                siteHeader.classList.remove('hide-preheader');
            }
        });
    }

    // Mobile offcanvas menu
    var menuBtn = document.querySelector('.nav-menu-btn');
    var offcanvasMenu = document.getElementById('offcanvas-menu');
    var offcanvasBackdrop = document.getElementById('offcanvas-backdrop');
    var offcanvasClose = document.getElementById('offcanvas-close');

    function openOffcanvas() {
        if (!offcanvasMenu || !offcanvasBackdrop) return;
        offcanvasMenu.classList.add('active');
        offcanvasBackdrop.classList.add('active');
        document.body.classList.add('offcanvas-open');
        offcanvasClose.focus();
    }

    function closeOffcanvas() {
        if (!offcanvasMenu || !offcanvasBackdrop) return;
        offcanvasMenu.classList.remove('active');
        offcanvasBackdrop.classList.remove('active');
        document.body.classList.remove('offcanvas-open');
        if (menuBtn) menuBtn.focus();
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', openOffcanvas);
    }

    if (offcanvasClose) {
        offcanvasClose.addEventListener('click', closeOffcanvas);
    }

    if (offcanvasBackdrop) {
        offcanvasBackdrop.addEventListener('click', closeOffcanvas);
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && offcanvasMenu && offcanvasMenu.classList.contains('active')) {
            closeOffcanvas();
        }
    });

    // Reviews carousel - Slick
    if (typeof $.fn.slick !== 'undefined' && $('.reviews-track').length) {
        $('.reviews-track').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: false,
            speed: 400,
            prevArrow: '.review-arrow-left',
            nextArrow: '.review-arrow-right',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
})();
