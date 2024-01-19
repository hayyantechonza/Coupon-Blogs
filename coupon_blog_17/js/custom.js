$(function() {
  $(".toggler").click(function(e) {
    e.preventDefault();
    $('.navigation_prent').slideToggle();
    $('.search input').slideUp();
  });
  $(".search button").click(function(e) {
    e.preventDefault();
    $('.navigation_prent').slideUp();
    $('.search input').slideToggle();
  });
  var swiper = new Swiper('.hero_main', {
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    speed: 600,
    centeredSlides: true,
    slidesPerView: "auto",
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  var swiper = new Swiper('.latest_post_wrapper', {
    loop: true,
    spaceBetween: 30,
    speed: 600,
    slidesPerView: "auto",
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  $('.l_p_side_filter_btn').click(function(e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
    var attrValue = $(this).attr('data-filter');
    $(`.l_p_side_item[data-filter="${attrValue}"]`).addClass('active').siblings('.l_p_side_item').removeClass('active');
  });
  $('.str_btn').click(function() {
    $(this).parent().siblings('.store_body').slideToggle();
    $(this).children('.ti').toggleClass('ti-chevron-down').toggleClass('ti-chevron-up');
  });
  $('.form_wrapper input').bind('keyup', function() {
    var value = $(this).val();
    if (value != '') {
      $('.search_result').fadeIn(100);
    } else {
      $('.search_result').fadeOut(100);
    }
  });
   alphabet = ['all', '#', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  $('.str_filter').append(alphabet.map(index => `<a href="single_alphabet.html" class="str_alpha">${index}</a>`));
  $('.str_alpha').first().addClass('active');
});