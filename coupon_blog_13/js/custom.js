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
   var swiper = new Swiper(".hero_slider", {
      slidesPerView: 1,
      grabCursor: true,
      spaceBetween: 20,
      speed: 800,
      loop: true,
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
   });
   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
   $('.str_filter').append(alphabet.split('').map(letter =>
      `<li><a href="single_alphabet.html" class="str_alpha">${letter}</a></li>`
   ));
   $('.str_alpha').first().addClass('active');
   $('.copy').click(function() {
      const button = $(this);
      button.addClass('active');
      setTimeout(() => button.removeClass('active'), 3000);

      const input = button.siblings('.modal_btn').find('input');
      input.select();
      document.execCommand('copy');
   });
   $('.lazy').lazy();
   var swiper = new Swiper(".f_b_slider_thumb", {
      spaceBetween: 10,
      direction: "vertical",
      slidesPerView: "auto",
      speed: 800,
      autoplay: {
         delay: 8000,
      },
      mousewheel: true,
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
   });
   var swiper2 = new Swiper(".f_b_slider", {
      spaceBetween: 10,
      effect: "fade",
      speed: 800,
      rewind: true,
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      autoplay: {
         delay: 2000,
      },
      thumbs: {
         swiper: swiper,
      },
   });

   $("#cpn_modal").modal('show')
});

///////////////// END FUNCTION