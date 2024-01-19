///////////////// READY FUNCTION
$(function() {

   $('.search_btn').click(function() {
      $('.search_bar_wrapper').slideToggle();
      $('.search_bar_wrapper').find('input').focus();
   });

   $('.cat_btn').click(function() {
      $('.dropdown_wrapper').slideToggle(500);
   });

   const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   alphabets.forEach(function(alphabet) {
      $('.store_slide').addClass(`store_slide_${alphabet}`);
      $(document).ready(function() {
         let swiper = new Swiper(`.store_slide_${alphabet}`, {
            grabCursor: true,
            slidesPerView: "auto",
            spaceBetween: 20,
            speed: 500,
            navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
            },
         });
      });
   });

   let swiper = new Swiper(`.cat_body`, {
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      speed: 500,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
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

   $('#cpn_modal').modal('show');
});

///////////////// END FUNCTION