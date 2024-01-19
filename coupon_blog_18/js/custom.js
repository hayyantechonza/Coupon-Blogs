$(function() {
  $('.search_item').fadeOut(0);
  displayNotFoundMessage("Please type at least one character for search.");

  $('#search_input').on('keyup', function() {
    var inputValue = $("#search_input").val().toLowerCase();
    if (inputValue !== "") {
      $('.search_item').each(function(item, key) {
        var itemTitle = $(key).find('.webkit_box').text().toLowerCase();
        if (itemTitle.indexOf(inputValue) !== -1) {
          $(key).fadeIn(0);
          $('#search_modal .modal-body').find("p").remove();
        } else {
          $(key).fadeOut(0);
        }
      });
      displayNotFoundMessage("Not Found.");
    } else {
      $('.search_item').fadeOut(0);
      displayNotFoundMessage("Please type at least one character for search.");
    }
  });

  function displayNotFoundMessage(message) {
    if ($('.search_item:visible').length === 0) {
      $('#search_modal .modal-body').find("p").remove();
      $('#search_modal .modal-body').append(`<p class='search_not_found'>${message}</p>`);
    }
  }

  $('.search_modal_btn').click(function() {
    $('#search_modal').modal('show');

    $('#search_modal').on('shown.bs.modal', function() {
      $('#search_input').focus();
    });
  });

  $(window).on('scroll', function() {
    var headerHieght = $("header").height();
    if ($(this).scrollTop() > headerHieght + 40) {
      $("header").addClass("active");
    } else if ($(this).scrollTop() < 1) {
      $("header").removeClass("active");
    }
  });
  $('.menu_btn').click(function() {
    $("nav").toggleClass('active');
    $(this).toggleClass('active');
    $('body').toggleClass('active');
    $(this).find('.ti').toggleClass('ti-x').toggleClass('ti-menu-2');;
  });

  var popBlogSlideThumb = new Swiper(".pop_blog_main", {
    slidesPerView: "auto",
    watchSlidesProgress: true,
    spaceBetween: 20,
    rewind: true,
    mousewheel: true,
    freeMode: true,
    breakpoints: {
      993: {
        direction: 'vertical',
      }
    }
  });
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  let popBlogSlide = null;

  function initSwiper() {
    popBlogSlide = new Swiper(".pop_blog_img_slider", {
      spaceBetween: 20,
      rewind: true,
      autoplay: {
         delay: 5000,
         disableOnInteraction: false
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      },
      slidesPerView: "auto",
      thumbs: {
        swiper: popBlogSlideThumb
      }
    });
  }

function destroySwiper() {
    if (popBlogSlide !== null) {
      popBlogSlide.destroy();
      popBlogSlide = null;
    }
  }

  function handleWindowResize() {
    const windowWidth = $(window).width();
    if (windowWidth <= 992) {
      destroySwiper();
    } else {
      if (popBlogSlide === null) {
        initSwiper();
      }
    }
  }

  handleWindowResize();

  $(window).resize(function() {
    handleWindowResize();
  });

  var latestBlog = new Swiper(".latest_blog_main", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: '.l_b_btn.swiper-button-next',
      prevEl: '.l_b_btn.swiper-button-prev',
    },
  });
  alphabet = ['all', '#', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  $('.str_filter').append(alphabet.map(index => `<a href="single_alphabet.html" class="str_alpha">${index}</a>`));
  $('.str_alpha').first().addClass('active');

  $('.backBtn').click(function() {
    window.history.back();
  });

  $("#cpn_modal").modal("show");
});