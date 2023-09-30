jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });

});

const carousel = document.querySelector('.image-carousel');
const prevButton = carousel.querySelector('.prev-button');
const nextButton = carousel.querySelector('.next-button');
const images = carousel.querySelectorAll('.image-container');
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

function showNextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

function showPrevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
}


prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);
setInterval(showNextImage, 3000);

showImage(currentIndex);