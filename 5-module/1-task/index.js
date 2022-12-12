function hideSelf() {
  hideSelfButton = document.querySelector('.hide-self-button');
  hideSelfButton.addEventListener('click', () => hideSelfButton.hidden = true, { once: true });
}
