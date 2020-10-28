import imagesListTpl from '../templates/image-card.hbs';
import fetchImage from './apiService';

const { data } = require('autoprefixer');

let pageNumber = 1;
let searchInput;

const searchFormRef = document.querySelector('.search-form');
const galleryRef = document.querySelector('.js-gallery');
const loadMoreBtn = document.querySelector('.js-load-more-btn');

const pullGallery = event => {
  event.preventDefault();
  galleryRef.innerHTML = '';
  searchInput = '';
  pageNumber = 1;
  searchInput = event.target.value;
  fetchImage(searchInput);
};

const renderllery = data => {
  const markup = imagesListTpl(data.hits);
  galleryRef.insertAdjacentHTML('beforeend', markup);
  window.scrollTo(0, document.documentElement.offsetHeight);
};

searchFormRef.addEventListener('change', pullGallery);

const loadMoreImages = () => {
  if (searchInput) {
    pageNumber += 1;
    fetchImage(searchInput, pageNumber);
  }
};

loadMoreBtn.addEventListener('click', loadMoreImages);

export default renderllery;
