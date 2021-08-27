// Gallery Page Slider bxslider plugin
$(document).ready(function() {
    $("#slider").bxSlider({
        // mode: 'fade',
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 600,
        slideMargin: 20,
        captions: true,
        speed: 1000,
        infiniteLoop: true,
        adaptiveHeight: true,
        preloadImages: 'visible',
    });

    
});

// $(document).ready(function() {  
//     // ScrollReveal().reveal('header');
//     // ScrollReveal().reveal('main', { delay: 500 });
//     // ScrollReveal().reveal('footer', { delay: 5000 });
//     ScrollReveal().reveal('header', {
//         delay: 300,
//         reset: true,
//         easing: 'ease-in'
//     });

//     ScrollReveal().reveal('#title', {
//         delay: 400,
//         reset: true,
//         easing: 'ease-in'
//     });

//     ScrollReveal().reveal('section', {
//         delay: 800,
//         interval: 500,
//         reset: true,
//         easing: 'ease-in'
//     });

//     ScrollReveal().reveal('footer', { 
//         delay: 500,
//         reset: true,
//         easing: 'ease-in' 
//     });

//     ScrollReveal().reveal('.facebook_icon', { 
//         delay: 600,
//         reset: true,
//         easing: 'ease-in' 
//     });

//     ScrollReveal().reveal('.instagram_icon', { 
//         delay: 700,
//         reset: true,
//         easing: 'ease-in' 
//     });

//     ScrollReveal().reveal('.discord_icon', { 
//         delay: 800,
//         reset: true,
//         easing: 'ease-in' 
//     });

//     ScrollReveal().reveal('.footer_nav', { 
//         delay: 850,
//         reset: true,
//         easing: 'ease-in' 
//     });

//     ScrollReveal().reveal('#copyright', { 
//         delay: 900,
//         reset: true,
//         easing: 'ease-in' 
//     });

//     ScrollReveal().reveal('#kitsune_head', { 
//         delay: 950,
//         reset: true,
//         easing: 'ease-in' 
//     });

//     ScrollReveal().reveal('hr', { 
//         delay: 800,
//         reset: true,
//         easing: 'ease-in'
//     });

//     ScrollReveal().reveal('.past_events', {
//         interval: 500,
//         reset: true,
//         easing: 'ease-in'
//     });
// });