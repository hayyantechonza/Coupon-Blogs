///////////////// READY FUNCTION
$(function() {

   $('.toggler').click(function() {
      $('.navigation_bar').toggleClass('active');
      $('body').toggleClass('active');
   });

   var swiper = new Swiper(".popular_categories", {
      slidesPerView: "auto",
      grabCursor: true,
      spaceBetween: 20,
      speed: 500,
      autoplay: true,
      navigation: {
         nextEl: '.swiper-button-next.cat_slide_btn',
         prevEl: '.swiper-button-prev.cat_slide_btn',
      },
   });
   var swiper = new Swiper(".h_side_slide", {
      slidesPerView: "auto",
      grabCursor: true,
      autoplay: true,
      spaceBetween: 20,
      direction: 'vertical',
      speed: 500,
   });
   var swiper = new Swiper(".f_b_main", {
      slidesPerView: "auto",
      grabCursor: true,
      autoplay: true,
      spaceBetween: 20,
      speed: 500,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
   });

   var swiper = new Swiper(".s_sub_categories", {
      slidesPerView: "auto",
      autoplay: true,
      spaceBetween: 20,
      rewind: true,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
   });

   $('.str_filter_btn').click(function() {
      $('.str_filter_fade').slideToggle();
   });


   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
   $('.str_filter').append(alphabet.split('').map(index => `<li><a href="single_alphabet.html" class="str_alpha">${index}</a></li>`));
   $('.str_alpha').first().addClass('active');

   $('.copy').click(function() {
      $(this).addClass('active');
      setTimeout(function() {
         $('.copy').removeClass('active');
      }, 3000);
      var codeCopy = $(this).siblings('.modal_btn').find('input');
      codeCopy.select();
      document.execCommand('copy');
   });

   $('#cpn_modal').modal('show')

   $('.animate').each(function() {
      var offset = $(this).offset().top;
      var windowHeight = $(window).height();
      if (offset < $(window).scrollTop() + windowHeight - 50) {
         $(this).addClass('show');
      }
   });

   $(window).on('scroll', function() {
      $('.animate.show').each(function() {
         var offset = $(this).offset().top;
         var windowHeight = $(window).height();
         if (offset > $(window).scrollTop() + windowHeight - 0) {
            $(this).removeClass('show');
         }
      });

      $('.animate:not(.show)').each(function() {
         var offset = $(this).offset().top;
         var windowHeight = $(window).height();
         if (offset < $(window).scrollTop() + windowHeight - 50) {
            $(this).addClass('show');
         }
      });
   });
});

///////////////// END FUNCTION