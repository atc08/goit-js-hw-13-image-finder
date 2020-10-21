import refs from '../js/refs';

const loadBtn = {
  enable() {
    refs.loadMoreBtn.disabled = false;
    refs.buttonText.textContent = 'Load more'
    refs.spinner.classList.add('is-hidden');
  },
  disable() {
    refs.loadMoreBtn.disabled = true;
    refs.buttonText.textContent = 'Loading...'
    refs.spinner.classList.remove('is-hidden');
  },
  show() {
    refs.loadMoreBtn.classList.remove('is-hidden');
  }
}

export default loadBtn;