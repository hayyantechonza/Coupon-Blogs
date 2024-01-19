const navigator = (link, trigger) => {
   var navigator = $(`.${trigger}`);
   var navLink = $('main').find(`.${link}`);
   $(navLink).each(function(index, value) {
      if (value.className == `${link} active`) {
         navigator.css({
            'left': $(this).position().left,
            'width': $(this).width()
         })
      }
   });
   $(navLink).hover(function() {
      var linkOffset = $(this).position().left;
      var linkWidth = $(this).width();
      $(this).addClass('active');
      navigator.css({
         'left': linkOffset,
         'width': linkWidth
      });
   });
}

///////////////// READY FUNCTION
$(function() {
   navigator("nav_link", "trigger");
   $('.toggler,.close_menu').click(function() {
      $(".sidebar").toggleClass("active");
      $("main").toggleClass("active");
      $('body').toggleClass('active')
   });
   const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   alphabet.map(function(index, elem) {
      $('.str_filter').append(`<li><a href="single_alphabet.html" class="str_alpha">${index}</a></li>`);
      $('.str_alpha').first().addClass('active');
   })
   $('.copy').click(function() {
      $(this).addClass('active');
      setTimeout(function() {
         $('.copy').removeClass('active');
      }, 3000);
      var codeCopy = $(this).siblings('.modal_btn').find('input');
      codeCopy.select();
      document.execCommand('copy');
   });

   var swiper = new Swiper(".hero_main", {
      slidesPerView: "auto",
      grabCursor: true,
      spaceBetween: 20,
      centerSlide: true,
      speed: 800,
      loop: true,
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
   });
   $('#cpn_modal').modal('show')
});

///////////////// END FUNCTION