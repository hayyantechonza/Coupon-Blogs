$(window).on('load', function() {
   setTimeout(function() {
      $('.loader').fadeOut(300);
   }, );
});


$(".menu_toggler").on("click", function() {
   $(".navbar-nav").addClass("active");
   $("body").addClass("active");
});
$(".menu_close").on("click", function() {
   $(".navbar-nav").removeClass("active");
   $("body").removeClass("active");
});


$(function() {
   $('.lazy').Lazy({
      afterLoad: function(element) {
         $(element).removeClass('loader');
      }
   });
});

var swiper = new Swiper(".blog_cat_slider", {
   slidesPerView: 1,
   grabCursor: true,
   lazy: true,
   speed: 800,
   loop: true,
   // autoplay: {
   //    delay: 3000,
   // },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      800: {
         slidesPerView: 3,
      },
      600: {
         slidesPerView: 2,
      },
   },
});


var swiper = new Swiper(".str_blog_slider", {
   slidesPerView: 1,
   grabCursor: true,
   lazy: true,
   spaceBetween: 10,
   speed: 500,
   loop: true,
   autoplay: {
      delay: 3000,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

var alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
$(alphabets).map(function(index, elem) {
   $(".str_filter").append(`<a href="single_alphabet.html" class="str_alpha">${elem}</a>`);
})

var swiper = new Swiper(".hero_sec_posts", {
   slidesPerView: "auto",
   grabCursor: true,
   spaceBetween: 20,
   speed: 500,
   // autoplay: {
   //    delay: 3000,
   // },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

$(function() {
   $("#cpn_modal").modal("show");
});