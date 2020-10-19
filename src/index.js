import './sass/styles.scss';
import imgService from './js/apiService';
import refs from './js/refs';
import markUpHandler from './js/markup';
import { myAlert, myNotice, mySuccess, myError, myInfo } from './js/notification';

myInfo();
refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  imgService.query = form.elements.query.value;
  refs.imgContainer.innerHTML = '';
  
  imgService.resetPage();
  updateImgHandler();
  form.reset();
});

refs.loadMoreBtn.addEventListener('click', updateImgHandler);

function updateImgHandler() {
  refs.loadMoreBtn.classList.add('is-hidden'); 
  refs.spinner.classList.remove('is-hidden');

  imgService.fetchImg()
    .then(({ hits, totalHits }) => {
    markUpHandler(hits);
      refs.loadMoreBtn.classList.remove('is-hidden');
      refs.upButton.classList.remove('is-hidden');
      
      if (hits.length === 0) {
        refs.upButton.classList.add('is-hidden');
        refs.loadMoreBtn.classList.add('is-hidden');
        myError();
      }

      // if (imgService.query === '') {
      //   refs.loadMoreBtn.classList.add('is-hidden');
      //   myAlert();
      // }
      
      // if (totalHits === 0) {
      //   refs.loadMoreBtn.classList.add('is-hidden');
      //   myNotice();
      // }
      
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth'
      });
  })
  .finally(() => {
    refs.spinner.classList.add('is-hidden');
  });

}

refs.upButton.addEventListener('click', upButtonHandler);

function upButtonHandler() {
  window.scrollTo({
        top: document.documentElement.offsetTop,
        behavior: 'smooth'
      }); 
  }



