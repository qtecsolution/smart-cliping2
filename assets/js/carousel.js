
$(document).ready(function(){
    if($('.owl-blog').length > 0) {
        $('.owl-blog').owlCarousel({
            margin: 30,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            items: 4,
            nav: true,
            dots: false,
            responsive : {
                // breakpoint from 768 up
                0 : {
                    items: 1
                },

                768 : {
                    items: 2
                },
        
                // breakpoint from 768 up
                991 : {
                    items: 3
                },
        
                // breakpoint from 768 up
                1200 : {
                    items: 4
                }
            }
        });

        $(".owl-prev").html('<svg xmlns="http://www.w3.org/2000/svg" width="28.334" height="22.142" viewBox="0 0 28.334 22.142"><path id="right-arrow" d="M21.2,5.007a1.117,1.117,0,0,0-1.587,1.571l8.047,8.047-23.4.062A1.106,1.106,0,0,0,3.156,15.8a1.118,1.118,0,0,0,1.111,1.127l23.4-.062L19.618,24.9a1.139,1.139,0,0,0,0,1.587,1.112,1.112,0,0,0,1.587,0l9.952-9.952a1.093,1.093,0,0,0,0-1.571Z" transform="translate(31.49 26.816) rotate(180)" fill="#d1d1d1"/></svg>');
        $(".owl-next").html('<svg xmlns="http://www.w3.org/2000/svg" width="54.716" height="22.142" viewBox="0 0 54.716 22.142"><path id="right-arrow" d="M21.2,5.007a1.117,1.117,0,0,0-1.587,1.571l8.047,8.047-49.78-.265a1.106,1.106,0,0,0-1.111,1.112A1.118,1.118,0,0,0-22.115,16.6l49.78.265L19.618,24.9a1.139,1.139,0,0,0,0,1.587,1.112,1.112,0,0,0,1.587,0l9.952-9.952a1.093,1.093,0,0,0,0-1.571Z" transform="translate(23.226 -4.674)" fill="#2a2a2a"/></svg>');
    }

    if($('.owl-client').length > 0) {
        $('.owl-client').owlCarousel({
            margin: 10,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoWidth: false,
            items: 5,
            nav: false,
            dots: false,
            responsive : {
                // breakpoint from 768 up
                0 : {
                    items: 2
                },
        
                // breakpoint from 768 up
                991 : {
                    items: 5
                }
            }
        });
    }
});