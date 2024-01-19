///////////////// READY FUNCTION
$(function() {

   $('.toggler').click(function() {
      $('.navigation_bar').slideToggle();
   });

   var swiper = new Swiper(".hero_slider", {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 5,
      loop: true,
      autoplay:{
         delay: 5000, 
      },
      speed: 500,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
   });
   var swiper = new Swiper(".l_p_container", {
      slidesPerView: "auto",
      spaceBetween: 30,
      rewind:true,
      grabCursor: true,
      freeMode: true,
      autoplay:{
         delay: 3000, 
      },
      speed: 600,
       scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
   });

   const alphabet = '#abcdefghijklmnopqrstuvwxyz';
   $('.str_filter').append(alphabet.split('').map(index => `<a href="single_alphabet.html" class="str_alpha">${index}</a>`));
   $('.str_alpha').first().addClass('active');

   $('.copy').click(function() {
      var codeCopy = $(this).siblings('.modal_btn').find('input');
      codeCopy.select();
      document.execCommand('copy');
   });

   $('#cpn_modal').modal('show')

   $('.search_btn,.search_close').click(function() {
      $(this).toggleClass('active');
      if (!$('.search_btn').hasClass('.active') || $('.search_close').hasClass('.active')) {
         $('.search_form').slideToggle('fast');
         $('.search_form').find('input').focus();
      }
   });
});

///////////////// END FUNCTION