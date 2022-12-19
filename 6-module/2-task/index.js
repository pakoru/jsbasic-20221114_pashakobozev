export default class ProductCard {

  elem = null;
  #product = [];
  


  constructor(product) {
    this.#product = product;
    this.#render();
  }


  #render() {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =
      `
      <div class="card__top">
        <img src="/assets/images/products/${this.#product.image}" class="card__image" alt="product">
        <span class="card__price">€${this.#product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${this.#product.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
    `

    this.elem = div;
    this.#button.addEventListener('click', this.#onElemClick)
  }

  #onElemClick = () => {
    const event = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
      detail: this.#product.id, // Уникальный идентификатора товара из объекта товара
      bubbles: true // это событие всплывает - это понадобится в дальнейшем
    });
    this.#button.dispatchEvent(event);
    console.log(event);
  }

  get #button() {
    return this.elem.querySelector('.card__button');
  }
}