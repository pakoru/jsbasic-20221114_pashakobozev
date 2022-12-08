function toggleText() {
  const toggleTextButton = document.querySelector('.toggle-text-button');
  const text = document.querySelector('#text');
  toggleTextButton.addEventListener('click', () => {
    if (text.hidden === false) {
      text.hidden = true;
      return;
    }
    if (text.hidden === true) {
      text.hidden = false;
      return;
    }
  }
  )
}
