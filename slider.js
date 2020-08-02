$(function () {
    $('.review-slider').slick({
        infinite: false,
        slidesToShow:3,
        slidesToScroll:1,
        arrows: true,
        autoplay: true,
        autoplaySpeed:1000,
        prevArrow: '.arrow-prev',
        nextArrow: '.arrow-next',
    });
});