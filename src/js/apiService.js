'use strict'

import { myError } from './notification'

const apiKey = '18746845-d42972f09728a4362613f1690';


export default {
  searchQuery: '',
  page: 1,
  fetchImg() {
  const url = `https://pixabay.com/api/?image_type=photo&lang=en,ru&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;

  return fetch(url)
    .then(response => response.json())
    .then(({ hits, totalHits }) => {
      this.incrementPage();
      return { hits, totalHits };
    })
    .catch(error => myError());
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};