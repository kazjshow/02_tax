$('.hamburger-menu-btn').on('click', function(){
    $(this).toggleClass('js-active');
    $('.nav').toggleClass('js-open');
})