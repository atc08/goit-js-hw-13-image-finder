'use strict'

const apiKey = '18746845-d42972f09728a4362613f1690';

function fetchImg(searchImg) {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchImg}&page=1&per_page=12&key=${apiKey}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => data.hits)
    .catch(error => console.log(error));
}

export default fetchImg;