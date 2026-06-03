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
