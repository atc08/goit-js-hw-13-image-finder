import './sass/styles.scss';
import fetchImg from './js/fetch-images';
import refs from './js/refs';
import markUpHandler from './js/markup';
 

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const inputValue = form.elements.query.value;

  refs.imgContainer.innerHTML = '';
  form.reset();
  fetchImg(inputValue).then(markUpHandler); 
})



