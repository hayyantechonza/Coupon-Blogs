$(function() {
   $('.toggler').click(function() {
      $('body').addClass('active')
      $(".menu_navbar").addClass("active")
   });
   $(document).click(function(e) {
      var element = event.target;
      if (element.classList.contains('active') && !element.classList.contains('menu_navbar')) {
         $('body').removeClass('active')
         $(".menu_navbar").removeClass("active")
      }
   });

   let existingStyles = "";
   $("[class^='line_clamp_']").each((_, el) => {
      const match = el.className.match(/line_clamp_(\d+)/);
      if (match) {
         const cssClass = `.line_clamp_${match[1]}`;
         if (!existingStyles.includes(cssClass)) {
            existingStyles += cssClass;
            $('head').append($(`<style>${cssClass} { -webkit-line-clamp: ${match[1]}; }</style>`));
         }
      }
   });

   const alphabet = '#abcdefghijklmnopqrstuvwxyz';
   $('.str_filter').append(alphabet.split('').map(index => `<a href="single_alphabet.html" class="str_alpha">${index}</a>`));
   $('.str_alpha').first().addClass('active');


   $('.input').bind('keyup', function() {
      if ($(this).val() != '') {
         $(this).parents('.search').addClass('active');
         $(this).parent().siblings(".dropdown_search").slideDown('800');
      } else {
         $(this).parents('.search').removeClass('active');
         $(this).parent().siblings(".dropdown_search").slideUp('800');
      }
   });
   var swiperSpeed = 1000;
   var swiper = new Swiper('.p_s_slider', {
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: true,
      grabCursor: true,
      speed: swiperSpeed,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
   });
   var swiper = new Swiper(".m_s_stores", {
      slidesPerView: "auto",
      spaceBetween: 10,
      autoplay: true,
      centeredSlides: true,
      loop: true,
      speed: swiperSpeed,
      grabCursor: true,
      slideShadows: false,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
   });

   var swiper = new Swiper('.p_c_main', {
      slidesPerView: "auto",
      speed: swiperSpeed,
      rewind: true,
      spaceBetween: 20,
      grabCursor: true,
      autoplay: true,
      pagination: {
         el: '.swiper-pagination',
         type: 'bullets',
         clickable: true,
      },
   });

   var swiper = new Swiper('.r_b_main', {
      slidesPerView: "auto",
      speed: swiperSpeed,
      rewind: true,
      spaceBetween: 20,
      grabCursor: true,
      autoplay: true,
   });
   var currentYear = new Date().getFullYear();
   $("#currentYear").text(currentYear);

   var topBtn = `<button class="button top_button">
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

   $('.s_str_filter').on('click', function(e) {
      $(this).addClass('active');
      $(this).siblings().removeClass("active");
      var $clickeditem = $(this).attr("data-sort");
      var $checkDiv = $('.s_str_cpn');

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


   // $('.modal').modal("show")

});