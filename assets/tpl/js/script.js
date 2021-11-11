$(document).ready(function() {
    $("#mainSlider .owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        dots: true,
        dotsContainer: "#mainSlider .owl__dots",
    });
    let $width = $(window).width() / 2.5;
    $("#portfolio .owl-carousel.owl__left").owlCarousel({
        loop: true,
        autoWidth: true,
        items: 3,
        margin: 34,
        dots: false,
        onInitialize: () => {
            $("#portfolio .owl-carousel.owl__left").each((i, el) => {
                $(el).find('.card').css('width', $width);
            });
        }
    });
    $("#portfolio .owl-carousel.owl__center").owlCarousel({
        rtl: true,
        loop: true,
        autoWidth: true,
        items: 3,
        margin: 34,
        dots: false,
        onInitialize: () => {
            $("#portfolio .owl-carousel.owl__center").each((i, el) => {
                $(el).find('.card').css('width', $width);
            });
        }
    });
    $("#reviews .owl-carousel").owlCarousel({
        items: 4,
        center: true,
        startPosition: 1,
        margin: 25,
        dots: false
    });

});