$(function() {

  /*============================
  =            Menu            =
  ============================*/

  $(".menu_btn").click(function() {
    $(".menu_btn").children('.ti').toggleClass('ti-menu-2').toggleClass('ti-x');
    $(".menu").slideToggle();
  });

  /*=====  End of Menu  ======*/


  var swiper = new Swiper('.popular_blog_main', {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    freeMode: true,
    autoplay: true,
    speed: 500,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper = new Swiper('.pop_cat_slider', {
    direction: "horizontal",
    slidesPerView: "auto",
    speed: 500,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      992: {
        direction: 'vertical',
      }
    }
  });

  const alphabet = ['all store', '#', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  for (let index of alphabet) {
    $('.str_filter').append(`<a href="single_alphabet.html" class="str_alpha">${index}</a>`);
  }

  $('.str_alpha').first().addClass('active');

  $('.search input').bind('keyup', function() {
    var value = $(this).val();
    if (value != '') {
      $('.search_result').slideDown();
    } else {
      $('.search_result').slideUp();
    }
  });
});