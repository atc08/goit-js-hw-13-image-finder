'use strict'

import refs from '../js/refs';
import listMarkUpTpl from '../tamplates/listMarkUp.hbs';

function markUpHandler(hits) {
  const markUp = listMarkUpTpl(hits);
  refs.imgContainer.insertAdjacentHTML('beforeend', markUp);
}

export default markUpHandler;