

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
        spaceBetween: 30,
        free: true,
        breakpoints: {
            767: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    })


});

jQuery(document).ready(function($){
    
    
    
    // external js: isotope.pkgd.js

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  stagger: 30
});

$('.grid').masonry({
    columnWidth: 400,
    itemSelector:'.grid-item'
})

$('.filter-button-group').on( 'click', '.button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.checked').removeClass('checked');
    $( this ).addClass('checked');
  });
})
});


