///////////////// READY FUNCTION
$(function() {

   $('.toggler').click(function() {
      $('.navigation_bar').slideToggle();
   });
   var swiper = new Swiper(".p_b_slider", {
      slidesPerView: "auto",
      spaceBetween: 20,
      speed: 500,
      // rewind: true,
      navigation: {
         nextEl: '.swiper-button-next.p_b_slider_btn',
         prevEl: '.swiper-button-prev.p_b_slider_btn',
      },
   });

   $('.str_filter_btn').click(function() {
      $('.str_filter_fade').slideToggle();
   });


   const alphabet = '#abcdefghijklmnopqrstuvwxyz';
   $('.str_filter').append(alphabet.split('').map(index => `<li><a href="single_alphabet.html" class="str_alpha">${index}</a></li>`));
   $('.str_alpha').first().addClass('active');

   $('.copy').click(function() {
      var codeCopy = $(this).siblings('.modal_btn').find('input');
      codeCopy.select();
      document.execCommand('copy');
   });

   $('#cpn_modal').modal('show')

});

///////////////// END FUNCTION