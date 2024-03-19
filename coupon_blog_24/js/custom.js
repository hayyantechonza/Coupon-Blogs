$(function() {

  // Hero slider
  const categoriesSlider = new Swiper('.popular_categories_slider', {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper_category_nav .swiper-button-next',
      prevEl: '.swiper_category_nav .swiper-button-prev',
    },
  });

  // Menu
  $(".menu_btn").click(function() {
    $(".menu_btn").children('.ph-bold').toggleClass('ph-list').toggleClass('ph-x');
    $(".menu").slideToggle();
  });

  // Store Filter Buttons
  const generateAlphabates = () => {
    alphabet = ['all', '#', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    $('.str_filter').append(alphabet.map(index => `<a href="single_alphabet.html" class="str_alpha">${index}</a>`));
    $('.str_alpha').first().addClass('active');
  }
  generateAlphabates();

  // Single store rating
  $('.stars').delegate("a", "click", function(e) {
    e.preventDefault();
    $(this).prevAll().addClass('active');
    $(this).addClass('active');
    $(this).nextAll().removeClass('active');
  });
  $('.verified_filter').click(function() {
    $(this).children('.verified_btn').toggleClass('active')
  });

  // modal
  $('.cpn_btn').click(function() {
    // Find the parent container (.ft_coupon) of the clicked cpn_btn
    var couponContainer = $(this).closest('.ft_coupon');

    // Retrieve coupon details
    var title = couponContainer.find('.ft_cpn_title').text();
    var description = couponContainer.find('.ft_description').text();
    var users = couponContainer.find('.users span').text();
    var verified = couponContainer.find('.ft_cpn_detail_item.verified').length > 0;
    var couponCode = $(this).find('span i').text();
    var imageUrl = couponContainer.find('.ft_store_img img').attr('src');

    // Set coupon details into the modal
    $('#cpn_btn .modal_img img').attr('src', imageUrl);
    if (verified) {
      $('#cpn_btn .ft_cpn_detail_item.verified').show();
    } else {
      $('#cpn_btn .ft_cpn_detail_item.verified').hide();
    }
    $('#cpn_btn h5').text(title);
    $('#cpn_btn .modal_body_content').html('<p>' + description + '</p><p><strong>' + couponCode + '</strong> this code ' + users + ' use</p>');
  });

  // search result
  $('.search input').bind('keyup', function() {
    var value = $(this).val();
    if (value != '') {
      $('.search_result').fadeIn(100);
    } else {
      $('.search_result').fadeOut(100);
    }
  });

  $('.search_result_close').click(function(e) {
    e.preventDefault();
    $('.search input').val('');
    $('.search_result').fadeOut(100);
  });

});