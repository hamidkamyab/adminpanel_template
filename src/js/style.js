$('.toggle_menu').click(function() {
    const parent = $(this).parent();
    $('.icon-open', parent).toggleClass('open');
    $('.sub-menu', parent).slideToggle();
});

$('.sidebarBtn').click(function() {
    $('.sidebar').toggleClass('close');

    if ($('.sidebar').hasClass('close')) {
        localStorage.setItem('menu-status', 'close')
    } else {
        localStorage.setItem('menu-status', 'open')
    }
})

window.onload = () => {
    var menuStatus = localStorage.getItem('menu-status');
    $('.sidebar').addClass(menuStatus);
}