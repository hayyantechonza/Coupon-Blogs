$(function() {
  var heroThumbnail = new Swiper(".hero_thumbnail", {
    speed: 700,
    rewind: true,
    slidesPerView: 2,
    spaceBetween: 20,
    watchSlidesProgress: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    },
    breakpoints: {
      1100: {
        slidesPerView: 4
      },
      1024: {
        slidesPerView: 5
      },
      768: {
        slidesPerView: 4
      },
      500: {
        slidesPerView: 3
      }
    }
  });
  var heroSlider = new Swiper(".hero_slider", {
    speed: 700,
    rewind: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    thumbs: {
      swiper: heroThumbnail
    }
  });
  var heroSlider = new Swiper(".l_p_main", {
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    effect: "fade",
    navigation: {
      nextEl: '.l_p_main .swiper-button-next',
      prevEl: '.l_p_main .swiper-button-prev'
    },
  });
  var swiper = new Swiper(".cat_slider", {
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    speed: 600,
    slidesPerView: "auto",
  });
  alphabet = ['all', '#', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  $('.str_filter').append(alphabet.map(index => `<a href="single_alphabet.html" class="str_alpha">${index}</a>`));
  $('.str_alpha').first().addClass('active');

  var prevScrollPos = $(window).scrollTop();
  var menu = $('.header_top');
  $(window).scroll(function() {
    var currentScrollPos = $(window).scrollTop();
    if (prevScrollPos > currentScrollPos) {
      menu.removeClass('hide');
    } else {
      menu.addClass('hide');
    }
    prevScrollPos = currentScrollPos;
  });
  $('.switchers_items').on('click', function(e) {
    $(this).addClass('active');
    $(this).siblings().removeClass("active");
    var $clickeditem = $(this).attr("data-sort");
    var $checkDiv = $('.main_cpn');

    $.each($checkDiv, function(index, value) {
      var nn = value.getAttribute('data-type');
      if ($clickeditem != "all") {
        if (nn != $clickeditem) {
          value.style.display = "none";
        } else {
          value.style.display = "flex";
        }
      } else {
        value.style.display = "flex";
      }
    });

    e.preventDefault();
  });
  // $('#cpn_btn').modal("show")
  $('.form_wrapper input').bind('keyup', function() {
    var value = $(this).val();
    if (value != '') {
      $('.search_result').fadeIn(100);
    } else {
      $('.search_result').fadeOut(100);
    }
  });
  var topBtn = `<button class="btn top_button">
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 5l0 14"></path>
      <path d="M18 11l-6 -6"></path>
      <path d="M6 11l6 -6"></path>
   </svg>
   </button>`;
  $("body").append(topBtn);

  $(window).scroll(function() {
    if ($(this).scrollTop() === 0) {
      $('.top_button').removeClass('active');
    } else {
      $('.top_button').addClass('active');
    }
  });

  $('.top_button').click(function() {
    $(window).scrollTop(0);
  });
});


var homePage = $('input[type="hidden"]');
if ($(homePage).val() == "homePage") {
  var swiper = null;

  function initSwiper() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth <= 992) {
      if (!swiper) {
        swiper = new Swiper('.p_p_grid', {
          slidesPerView: 'auto',
          spaceBetween: 20,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        });
      }
    } else {
      if (swiper) {
        swiper.destroy();
        swiper = null;
      }
    }
  }

  function handleResize() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth > 992) {
      if (swiper) {
        swiper.destroy();
        swiper = null;
      }
    }
  }

  window.addEventListener('load', initSwiper);
  window.addEventListener('resize', initSwiper);
  window.addEventListener('load', handleResize);
  window.addEventListener('resize', handleResize);
}