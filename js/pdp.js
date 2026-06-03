$(function () {
    $('.easyzoom').easyZoom();

    // tab switching
    $('.pdp-tab').on('click', function () {
        $('.pdp-tab').removeClass('active');
        $(this).addClass('active');
    });
});