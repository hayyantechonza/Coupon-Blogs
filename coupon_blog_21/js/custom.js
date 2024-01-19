$(function() {
  $("#searchToggle").click(function() {
    $("body").toggleClass('active');
      $(this).children(".ti").toggleClass('ti-search').toggleClass('ti-x');
    $("header .search").slideToggle();
    $('.search_result').slideUp();
  });
  var swiper = new Swiper('.hero_content_slider', {
    rewind: true,
    spaceBetween: 25,
    slidesPerView: "auto",
    speed: 600,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var swiper = new Swiper('.latest_post_slider', {
    loop: true,
    spaceBetween: 25,
    slidesPerView: 1,
    speed: 800,
    breakpoints: {
      500: {
        slidesPerView: "auto",
        allowTouchMove: false,
      },
    },
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: '.swiper-button-next.latest',
    },
  });
  alphabet = ['all', '#', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  $('.str_filter').append(alphabet.map(index => `<a href="single_alphabet.html" class="str_alpha">${index}</a>`));
  $('.str_alpha').first().addClass('active');
  var mySwiper = new Swiper('.sidebar_pop_blogs', {
    loop: true,
    spaceBetween: 25,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  $("#cpn_modal").modal("show");
  $('header .search_wrapper input').bind('keyup', function() {
    var value = $(this).val();
    if (value != '') {
      $('.search_result').slideDown();
    } else {
      $('.search_result').slideUp();
    }
  });
});