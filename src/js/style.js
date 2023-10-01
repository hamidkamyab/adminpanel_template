$('.toggle_menu').click(function() {
    const parent = $(this).parent();
    $('.icon-open', parent).toggleClass('open');
    $('.sub-menu', parent).slideToggle();
});