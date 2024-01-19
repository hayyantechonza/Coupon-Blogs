
$(window).on('load', function () {
   setTimeout(function() {
      $('.loader_main').fadeOut(500);
   }, 3000);
});
$(function() {
   $('.lazy').Lazy({
      afterLoad: function(element) {
         $(element).removeClass('loader');
      }
   });
});
var swiper = new Swiper(".hero_store", {
   spaceBetween: 10,
   slidesPerView: "auto",
   speed: 200,
   loop: true,
   autoplay: {
      delay: 3000,
   },
});

$('input[type="search"]').bind('keyup', function() {
   var value = $(this).val();
   if (value != '') {
      $('.search_result').fadeIn(200);
   } else {
      $('.search_result').fadeOut(200);
   }
});


$(function() {
   var $pageNow = $("#pageNow").val();
   $('.nav-link[data-page="'+$pageNow+'"]').addClass("active");
})


var swiper = new Swiper(".blog_cat_slider", {
   spaceBetween: 10,
   slidesPerView: "auto",
   speed: 200,
   centeredSlides: true,
   loop: true,
   autoplay: {
      delay: 5000,
   },
   navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});