$(document).ready(function() {
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var lastScrollTop = 0;
  $(window).scroll(function() {
    var scrollVal = $(this).scrollTop();
    if (scrollVal - lastScrollTop > 50) {
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      lastScrollTop = scrollVal;
    } else if (lastScrollTop - scrollVal > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      lastScrollTop = scrollVal;
    }
  });
});
