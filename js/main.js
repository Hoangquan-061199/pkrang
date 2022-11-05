$(function () {
  $('.slide').owlCarousel({
    loop: 1,
    items: 1,
    dots: 0,
    nav: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
  $('.kn-slide').owlCarousel({
    loop: 1,
    items: 3,
    margin: 25,
    dots: 1,
    nav: 0,
  });

  $('.slide-posts').owlCarousel({
    loop: 1,
    items: 3,
    dots: 0,
    nav: 1,
    margin: 20,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
  $('.slide-client').owlCarousel({
    loop: 1,
    items: 2,
    dots: 1,
    nav: 0,
    margin: 24,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });

  // $('.ser-slide1').owlCarousel({loop: 0, items: 1, dots: 0, nav: 0})
  var slidesPerPage = 5; //globaly define number of elements per page
  var syncedSecondary = true;
  $('.ser-slide1')
    .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: 0,
      autoplay: false,
      dots: 0,
      loop: false,
      responsiveRefreshRate: 200,
      mouseDrag: 0,
    })
    .on('changed.owl.carousel', syncPosition);

  $('.ser-slide2')
    .on('initialized.owl.carousel', function () {
      $('.ser-slide2').find('.owl-item').eq(0).addClass('current');
    })
    .owlCarousel({
      items: slidesPerPage,
      dots: false,
      nav: false,
      margin: 35,
      smartSpeed: 200,
      slideSpeed: 500,
      // slideBy: 1,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100,
    })
    .on('changed.owl.carousel', syncPosition2);
  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    var current = el.item.index;

    //if you disable loop you have to comment this block
    // var count = el.item.count-1;
    // var current = Math.round(el.item.index - (el.item.count/2) - .5);

    // if(current < 0) {
    //   current = count;
    // }
    // if(current > count) {
    //   current = 0;
    // }

    //end block

    $('.ser-slide2')
      .find('.owl-item')
      .removeClass('current')
      .eq(current)
      .addClass('current');
    var onscreen = $('.ser-slide2').find('.owl-item.active').length - 1;
    var start = $('.ser-slide2').find('.owl-item.active').first().index();
    var end = $('.ser-slide2').find('.owl-item.active').last().index();

    if (current > end) {
      $('.ser-slide2').data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      $('.ser-slide2')
        .data('owl.carousel')
        .to(current - onscreen, 100, true);
    }
  }
  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      $('.ser-slide1').data('owl.carousel').to(number, 100, true);
    }
  }
  $('.ser-slide2').on('click', '.owl-item', function (e) {
    e.preventDefault();
    var number = $(this).index();
    $('.ser-slide1').data('owl.carousel').to(number, 300, true);
  });

  const resizeImage = (e, s) => {
    s = parseInt($(e).width()) * s;
    $(e).css({ height: s + 'px' });
  };
  resizeImage('.news-cnt .left .img', 310 / 540);
  resizeImage('.news-cnt .right .img', 105 / 180);
  resizeImage('.kn-slide .knowledge-item .img', 200 / 355);
  resizeImage('.register-trending .block-2 .item .img', 9 / 16);
  resizeImage('  .content-news .container .left .item .img', 9 / 16);

  $('.btn-search').click(function () {
    $('.input_sr').toggleClass('active');
  });
  $('.service ._see-more').click(function () {
    $('.ser-slide2').toggleClass('active');
    $(this).toggleClass('active');
  });
});
