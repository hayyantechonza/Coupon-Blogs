$(function() {
  /*============================
  =            Menu            =
  ============================*/

  $(".menu_btn").click(function() {
    $(".menu_btn").children('.ph-bold').toggleClass('ph-list').toggleClass('ph-x');
    $(".menu").slideToggle();
  });

  /*=====  End of Menu  ======*/

  /*==========================================
  =            Hero swiper slider            =
  ==========================================*/

  var swiper = new Swiper('.hero_slider', {
    loop: true,
    effect: "fade",
    grabCursor: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000
    },
  });

  var allSlides = $('.hero_slide');
  allSlides.each(function(index, el) {
    var imagePath = $(el).find(".hero_img img").attr('src');
    $(el).css("background-image", "url('" + imagePath + "')");
  });

  /*=====  End of Hero swiper slider  ======*/

  /*==========================================
  =            Popular categories            =
  ==========================================*/


  var swiper = new Swiper('.pop_ctgy_slider', {
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    autoplay: {
      delay: 5000
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  /*=====  End of Popular categories  ======*/

  /*=======================================
  =            Store alphbates            =
  =======================================*/

  const alphabet = ['all store', '#', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  for (let index of alphabet) {
    $('.str_filter').append(`<a href="single_alphabet.html" class="str_alpha">${index}</a>`);
  }

  $('.str_alpha').first().addClass('active');

  /*=====  End of Store alphbates  ======*/

  /*=================================
  =            rating js            =
  =================================*/

  $('.rating input').on('change', function() {
    var selectedRating = $("input[name='rating']:checked").val();
    $('#rating-text').text('You rated ' + selectedRating + ' stars.');

    $('.rating input').attr('disabled', true);
  });
  /*=====  End of rating js  ======*/

});