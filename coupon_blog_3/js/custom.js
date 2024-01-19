///////////////// READY FUNCTION
$(function() {

   $(document).mouseup(function(e) {
      var container = $(".serch_bar");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
         $(".dropdown_search").slideUp('800');
         $("body").removeClass("active");
         $(".search button").removeClass("active");
         $(".search").removeClass("active");
      }
   });

   $(".search button").click(function(e) {
      e.preventDefault();
      $(this).toggleClass("active");
      $('.input').blur();
      $(".search").toggleClass("active");
      if ($(this).hasClass("active")) {
         if ($(".input").val() != '') {
            $(".dropdown_search").slideDown('800');
            $("body").addClass("active");
         }
         $('.input').focus();
      } else {
         $(".dropdown_search").slideUp('800');
         $("body").removeClass("active");
      }
   });
   var swiper = new Swiper(`.hero_cpn`, {
      grabCursor: true,
      effect: "cards",
      slidesPerView: "auto",
      rewind: true,
      centeredSlides: true,
      autoplay: true,
      spaceBetween: 20,
      speed: 600,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
   });
   $('.input').bind('keyup', function() {
      if ($(this).val() != '') {
         $(".dropdown_search").slideDown('800');
         $("body").addClass("active");
      } else {
         $(".dropdown_search").slideUp("800");
         $("body").removeClass("active");
      }
   });

   $('.toggler').click(function() {
      $('body').toggleClass('active');
      $('.menu_navbar').toggleClass('active');
   });


   const alphabet = '#abcdefghijklmnopqrstuvwxyz';
   $('.str_filter').append(alphabet.split('').map(index => `<a href="single_alphabet.html" class="str_alpha">${index}</a>`));
   $('.str_alpha').first().addClass('active');

   $('.copy').click(function() {
      var codeCopy = $(this).siblings('.modal_btn').find('input');
      codeCopy.select();
      document.execCommand('copy');
   });

   $('#cpn_modal').modal('show');
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

   $('.single_str_heading').click(function() {
      $(this).toggleClass('active');
      $(this).siblings(".single_str_cpn_wrapper").slideToggle(300);
      $(this).parents('.s_s_wrapper').siblings(".s_s_wrapper").find('.single_str_cpn_wrapper').slideUp(300);
   });
   $('.like').click(function() {
      $(this).toggleClass("liked");
      if ($(this).hasClass("liked")) {
         $(this).attr('title', 'liked');
      }
      else{
         $(this).attr('title', 'like');
      }
   });
});