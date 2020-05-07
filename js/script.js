$('.js-slider').slick({
    dots: false,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
            }
        },

    ]
});
$('.navbar__toggle').click(function(event) {
    $(".header__nav").toggleClass('header__nav_open');
})