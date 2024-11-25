
$(document).ready(function () {

  $(' .tab__title').on('click', function () {

      $(' .tab__title').removeClass('active');
      $(this).toggleClass('active');
      $('.tab__content').fadeOut(400).eq($(this).index()).fadeIn( 400 );
  })
})

$(document).ready(function () {

  $(' .sections-tab__title').on('click', function () {

      $(' .sections-tab__title').removeClass('active');
      $(this).toggleClass('active');
      $('.sections-tab__content').fadeOut(400).eq($(this).index()).fadeIn( 400 );
  })
})


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
 

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar



    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
 

});