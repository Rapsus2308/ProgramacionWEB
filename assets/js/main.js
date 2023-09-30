jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width','0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({

                width: itemWidth

            }, 800);
      });
    });
});

jQuery(document).ready(function() {
    $('.image-carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 3000
    });
  });


