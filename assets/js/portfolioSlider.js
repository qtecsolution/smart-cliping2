$(document).ready(function () {
    /** SLIDER FOR START */
    const sliderFor = $('.slider-for');
    const solidBackButton = '<button class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" /></svg></button>';
    const solidNextButton = '<button class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /></svg></button>';

    if (sliderFor.length > 0) {
        sliderFor.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            asNavFor: '.slider-nav',
        });
    }
    /** SLIDER FOR END */

    /** SLIDER NAV START */
    const sliderNav = $('.slider-nav');

    if (sliderNav.length > 0) {
        sliderNav.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            arrows: true,
            vertical: false,
            centerMode: true,
            focusOnSelect: true,
            prevArrow: solidBackButton,
            nextArrow: solidNextButton,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        vertical: false
                    }
                }
            ]
        });
    }
});
