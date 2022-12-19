import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem = null;
  slides = '';

  constructor(slides) {
    this.slides = slides;
    this.#render();
  }

  #render() {
    const div = document.createElement('div');
    div.className = 'carousel';

    div.innerHTML = `
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>

        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

        <div class="carousel__inner">
       ${this.slides.map(data => `
    <div class="carousel__slide" data-id="${data.id}">
      <img src="/assets/images/carousel/${data.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${data.price}</span>
          <div class="carousel__title">${data.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
    </div>`
    ).join(``)}
    </div>
  `
    
    this.elem = div;

    this.#carouselInit();
    this.#eventHandler();
  }

#eventHandler(){
  this.carouselButtons = this.elem.querySelectorAll('.carousel__button')

  this.carouselButtons.forEach(element => {
    element.addEventListener('click', () => {
      const custom = new CustomEvent("product-add", { 
        detail: element.closest('.carousel__slide').dataset.id, 
        bubbles: true 
      })
      element.dispatchEvent(custom)
    });
  })
}


  #carouselInit() {
    this.slider = this.elem.querySelector('.carousel__inner');
    this.carouselArrowRight = this.elem.querySelector('.carousel__arrow_right');
    this.carouselArrowLeft = this.elem.querySelector('.carousel__arrow_left');
    this.carouselInner = this.elem.querySelector('.carousel__inner');

    let counter = 0;

    const eventChecker = () => {
      this.carouselInner.style.transform = `translateX(${-this.slider.offsetWidth * counter}px)`;
      if (counter === 0) {
        this.carouselArrowLeft.style.display = 'none';
      }
      if (counter > 0 && counter < this.slides.length) {              // количество слайдов
        this.carouselArrowRight.style.display = '';
        this.carouselArrowLeft.style.display = '';
      }
      if (counter === this.slides.length - 1) {                            // количество слайдов
        this.carouselArrowRight.style.display = 'none';
      }
    }

    this.carouselArrowLeft.addEventListener('click', () => {
      counter -= 1;
      eventChecker();
    });

    this.carouselArrowRight.addEventListener('click', () => {
      counter += 1;
      eventChecker();
    });
    eventChecker();
  }
}
