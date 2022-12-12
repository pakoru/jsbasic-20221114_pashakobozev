function initCarousel() {

  const carouselArrowRight = document.querySelector('.carousel__arrow_right');
  const carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  const carouselInner = document.querySelector('.carousel__inner');

  const sliderWidth = carouselInner.offsetWidth; // ширина блока слайдера
  
  let counter = 0;

  const eventChecker = () => {
    carouselInner.style.transform = `translateX(${-sliderWidth * counter}px)`;
    if (counter === 0) {
      carouselArrowLeft.style.display = 'none';
    }
    if (counter > 0 && counter < 3) {              // количество слайдов
      carouselArrowRight.style.display = '';
      carouselArrowLeft.style.display = '';
    }
    if (counter === 3) {                            // количество слайдов
      carouselArrowRight.style.display = 'none';
    }
  }

  carouselArrowLeft.addEventListener('click', () => {
    counter -= 1;
    eventChecker();
  });
  carouselArrowRight.addEventListener('click', () => {
    counter += 1;
    eventChecker();
  });

  eventChecker();
}
