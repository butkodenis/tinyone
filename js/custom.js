$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            992:{
                items:1,
                nav:true,
                loop:false
            }
        }
    });

});
