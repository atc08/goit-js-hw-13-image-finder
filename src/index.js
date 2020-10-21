import './sass/styles.scss';
import imgService from './js/apiService';
import refs from './js/refs';
import loadBtn from './js/loadMoreBtn';
import markUpHandler from './js/markup';
import { myAlert, myNotice, mySuccess, myError, myInfo } from './js/notification';
import 'basiclightbox/dist/basicLightbox.min.css';
import lightBox from './js/lightBox';

console.dir(document.documentElement);
myInfo();
// function heightHandler() {
//    if (document.documentElement.offsetHeight !== 0) {
//       sessionStorage.setItem('height', document.documentElement.offsetHeight)
//     }
// };

refs.searchForm.addEventListener('submit', searchFormHndler);

function searchFormHndler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  imgService.query = form.elements.query.value;
  refs.imgContainer.addEventListener('click', lightBox);
  
  clearMarkUp();
  imgService.resetPage();
  updateImgHandler();
  form.reset();
}

refs.loadMoreBtn.addEventListener('click', updateImgHandler);

function updateImgHandler() {
  loadBtn.disable();

  imgService.fetchImg()
    .then(({ hits, totalHits }) => {
      markUpHandler(hits);
      loadBtn.show();
      loadBtn.enable();
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
        behavior: 'smooth',
      });
  })
  .finally(() => {
  });

}

refs.upButton.addEventListener('click', upButtonHandler);

function upButtonHandler() {
  window.scrollTo({
    top: document.documentElement.offsetTop,
    behavior: 'smooth'
  }); 
}

function clearMarkUp() {
  refs.imgContainer.innerHTML = '';
}



