$(function() {

  $('.menu_btn').click(function() {
    $('body').toggleClass('active');
    $('.menu_btn').find('.ti').toggleClass('ti-x');
  });

  var swiper = new Swiper('.popular_slider', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
  alphabet = ['all', '#', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  $('.str_filter').append(alphabet.map(index => `<a href="single_alphabet.html" class="str_alpha">${index}</a>`));
  $('.str_alpha').first().addClass('active');

  // $("#cpn_modal").modal("show");




  $('.search_wrapper input').bind('keyup', function() {
    var value = $(this).val();
    if (value != '') {
      $('.search_result').fadeIn(300);
    } else {
      $('.search_result').fadeOut(300);
    }
  });

});