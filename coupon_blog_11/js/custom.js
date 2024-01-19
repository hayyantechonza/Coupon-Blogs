$(function() {
   $('.navbar-toggler').click(function() {
      $(this).toggleClass('active');
      $('.my_collapse').slideToggle();
   });
});

var swiper = new Swiper(".hero_slider", {
   slidesPerView: "auto",
   spaceBetween: 20,
   loop: true,
   speed: 800,
   grabCursor: true,
   autoplay: {
      delay: 3000,
   },
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
   },
   breakpoints: {
      992: {
         centeredSlides: false,
      },
      320: {
         centeredSlides: true,
      }
   }
});

var swiper = new Swiper(".top_header_slider", {
   slidesPerView: 1,
   speed: 800,
   direction: 'vertical',
   loop: true,
   grabCursor: true,
   autoplay: {
      delay: 3000,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

var swiper = new Swiper(".p_c_tabs", {
   slidesPerView: "auto",
   spaceBetween: 10,
   speed: 500,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

var swiper = new Swiper(".p_b_sidebar_slider", {
   slidesPerView: "auto",
   speed: 800,
   grabCursor: true,
   spaceBetween: 10,
   direction: 'vertical',
   autoplay: {
      delay: 3000,
   },
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
   },
   mousewheel: true,
});


var swiper = Swiper;
var init = false;



/* Which media query
 **************************************************************/
function swiperMode() {
   let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1201px)');
   let desktop = window.matchMedia('(min-width: 1201px)');

   // Enable (for mobile)
   if (desktop.matches) {
      if (!init) {
         init = true;
         var swiper = new Swiper(".latest_blogs_slider", {
            slidesPerView: "auto",
            speed: 800,
            grabCursor: true,
            releaseOnEdges: true,
            spaceBetween: 20,
            loop: true,
            direction: 'vertical',
            sensitivity: 1,
            mousewheel: false,
            freeMode: true,
            breakpoints: {
               768: {
                  mousewheel: false,
                  freeMode: false,
                  speed: 200,
                  autoplay: {
                     delay: 3000,
                  },
               },
            }
         });
      }

   } else if (mobile.matches) {
      var swiper = new Swiper(".latest_blogs_slider", {

      });
      swiper.destroy();
      init = false;
   }
}

/* On Load
 **************************************************************/
window.addEventListener('load', function() {
   swiperMode();
});



var swiper = new Swiper(".modal_sub_cat_slider", {
   slidesPerView: "auto",
   speed: 800,
   grabCursor: true,
   spaceBetween: 20,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});


$('.parallax-window').parallax({
   naturalWidth: 600,
   naturalHeight: 400,
});
$('.link').click(function(e) {
   e.preventDefault()
   $(this).parent().siblings('.nasted').slideToggle(200);
});

var swiper = new Swiper(".s_w_item", {
   slidesPerView: "auto",
   grabCursor: true,
   spaceBetween: 20,
   freeMode: true,
   mousewheel: true,
   scrollbar: {
      el: '.swiper-scrollbar',
   },
});


$(function() {
   const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   alphabet.map(function(index, elem) {
      $('.alphabates').append(`<li><a href="#" class="alphabat">${index}</a></li>`);
      $('.alphabat').first().addClass('active');
   })
});



$(function() {
   $('#cpn_modal').modal("show")
});
$('.copy_code').click(function() {
   $(this).addClass('active');
   setTimeout(function() {
      $('.copy_code').removeClass('active');
   }, 3000);
   var codeCopy = $(this).siblings('input');
   codeCopy.select();
   navigator.clipboard.writeText(codeCopy.val());
});