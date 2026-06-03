$(document).ready(function () {
    // Accordion Toggle for new refinement structure
    $('.refinement-top-block .category').on('click', function () {
        // Toggle the open class on the content block
        $(this).closest('.refinement-top-block').next('.refinement-bottom-block').slideToggle(300, function () {
            $(this).toggleClass('open');
            $(this).css('display', ''); // clear inline style to let CSS handle open/closed state if needed
        });
        // Toggle arrow rotation
        $(this).find('.accordion-arrow').toggleClass('rotate-arrow');
    });

    // Mobile Filter Drawer
    const $sidebar = $('.plp-sidebar');
    const $overlay = $('<div class="plp-sidebar-overlay"></div>');
    $('body').append($overlay);

    $('.plp-filter-btn-mobile').on('click', function () {
        $sidebar.addClass('open');
        $overlay.addClass('show');
        $('body').css('overflow', 'hidden');
    });

    // Close on overlay click
    $overlay.on('click', function () {
        $sidebar.removeClass('open');
        $overlay.removeClass('show');
        $('body').css('overflow', '');
    });


});
