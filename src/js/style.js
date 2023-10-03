$('.toggle_menu').click(function() {
    const parent = $(this).parent();
    $('.icon-open', parent).toggleClass('open');
    $('.sub-menu', parent).slideToggle();
});

$('.sidebarBtn').click(function() {
    $('.RightMenu').toggleClass('small');
    $('#content').toggleClass('close')
    if ($('.RightMenu').hasClass('small')) {
        localStorage.setItem('menu-status', 'small')
        $('.test').removeClass('col-10')
        $('.test').addClass('col-11')
        $('.hiddenItem').fadeOut(300)
        $('.main').addClass('wid')
    } else {
        localStorage.setItem('menu-status', '') //open
        $('.test').removeClass('col-11')
        $('.test').addClass('col-10')
        $('.hiddenItem').fadeIn(300)
        $('.main').removeClass('wid')
    }
})

window.onload = () => {
    var menuStatus = localStorage.getItem('menu-status');
    $('.RightMenu').addClass(menuStatus);
    $('#content').toggleClass(menuStatus)
    if (menuStatus == 'small') {
        $('.hiddenItem').fadeOut(0)
        $('.main').addClass('wid')
    } else {
        $('.main').removeClass('wid')
    }

}