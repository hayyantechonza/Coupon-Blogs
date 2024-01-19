// $(window).on('load', function() {
//    setTimeout(function() {
//       $('.loader_main').fadeOut(500);
//    }, 3000);
// });

$(function() {
   $('.lazy').Lazy({
      afterLoad: function(element) {
         $(element).removeClass('loader');
      }
   });
});

var swiper = new Swiper(".hero-slider", {
   slidesPerView: 1,
   grabCursor: true,
   speed: 800,
   loop: true,
   autoplay: {
      delay: 3000,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
   $('.nav-link[data-page="' + $pageNow + '"]').addClass("active");
})

$(window).scroll(function(event) {
   let $headerHeight = $('header').height();
   if ($(document).scrollTop() > 0) {
      $('header').addClass("fixed");
      $('header').find('img').attr('src', 'images/logo_light.svg');
   } else if ($(document).scrollTop() < 0.1) {
      $('header').removeClass("fixed")
      $('header').find('img').attr('src', 'images/logo_dark.svg');
   }
})
$(document).ready(function() {
   $(this).find('.featured_news').find('.blog:nth-child(4n + 1)').removeClass("layout_2");
});

var swiper = new Swiper(".editors_pick_swiper", {
   slidesPerView: "auto",
   grabCursor: true,
   spaceBetween: 5,
   speed: 800,
   loop: true,
   centeredSlides: true,
   autoplay: {
      delay: 5000,
   }, navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});


$('.comment i').click(function() {
   $(this).parents('.comment').siblings('.row').slideToggle();
});



$('.cpn').mouseover(function() {
   $(this).find('.cpn_body').children('p').slideDown('fast');
});
$('.cpn').mouseleave(function() {
   $(this).find('.cpn_body').children('p').slideUp('fast');
});

var quill = new Quill('#editor', {
  theme: 'snow',
   placeholder: 'Enter the messege here....',
});