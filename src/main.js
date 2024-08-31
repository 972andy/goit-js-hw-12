import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { fetchPhotos } from './js/pixabay-api';
import { greateCards } from './js/render-functions';

const form = document.querySelector('.form');
const galleryList = document.querySelector('.gallery-list');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more');
const lightBox = new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

let value = '';
let page = 1;
let cardHeight = 0;
let totalPages = 0;
let perPage = 15;

const onSearchSubmit = async e => {
  e.preventDefault();
  value = e.target.elements.inputField.value.toLowerCase().trim();
  page = 1; // Reset page to 1 for a new search

  if (!value) {
    iziToast.error({
      title: 'Error',
      message: 'You need to type something in the field!',
      position: 'topRight',
    });
    return;
  }

  loader.classList.remove('hidden');
  galleryList.innerHTML = ''; // Clear previous results

  try {
    const response = await fetchPhotos(value, page);
    if (response.data.total === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      loader.classList.add('hidden');
      loadMore.classList.add('hidden'); // Hide load more button if no results
      return;
    } else {
      greateCards(response.data.hits);
      lightBox.refresh();
      loader.classList.add('hidden');
      loadMore.classList.remove('hidden'); // Show load more button
      totalPages = response.data.totalHits; // Update total pages
    }
  } catch (err) {
    iziToast.error({
      message: `There is an Error ${err}. Try again!`,
      position: 'topRight',
    });
  } finally {
    form.reset(); // Clear form input after search
  }
};

const onLoadMoreClick = async e => {
  try {
    page += 1;
    loadMore.classList.add('hidden');
    loader.classList.remove('hidden');
    const response = await fetchPhotos(value, page);
    greateCards(response.data.hits);
    if (page * perPage >= totalPages) {
      iziToast.error({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      loadMore.classList.add('hidden');
      loader.classList.add('hidden');
      return;
    }
    const galleryCard = galleryList.querySelector('.gallery-item');
    cardHeight = galleryCard.getBoundingClientRect().height;
    scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    loader.classList.add('hidden');
    loadMore.classList.remove('hidden');
    lightBox.refresh();
  } catch (err) {
    iziToast.error({
      message: `There is an Error ${err}. Try again!`,
      position: 'topRight',
    });
  }
};

form.addEventListener('submit', onSearchSubmit);
loadMore.addEventListener('click', onLoadMoreClick);