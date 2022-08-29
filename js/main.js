$(function ($) {
    window.onscroll = () => {
        if (window.pageYOffset > 300) {
            $('#header').addClass('active');
        } else {
            $('#header').removeClass('active');
        }
    }
    window.onload = () => {
        if (window.pageYOffset > 300) {
            $('#header').addClass('active');
        } else {
            $('#header').removeClass('active');
        }
    }
})

