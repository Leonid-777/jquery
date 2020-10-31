$(document).ready(function() {
    $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {
        $('.overlay').fadeIn(3000);
        $('.modal').slideDown(3000);
    });
    $('.close').click(function() {
        $('.modal').slideUp(3000);
        $('.overlay').fadeOut(3000);
    });
});