$(function() {
    var mySwiper = new Swiper('.swiper-container-o', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        pagination: '.swiper-pagination'

    })
    var nestedSwiper = new Swiper('.swiper-container-n', {
        direction: 'horizontal',
        loop: false,
        nested: true,
        slidesPerView: 5,
        spaceBetween: 22,
        free: true,
        breakpoints: {
            767: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    })
});