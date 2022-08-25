import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImage, options } from './fetchImage';
import { createCard } from '../createCard';

const searchForm = document.querySelector('.search-form');
const inputForm = document.querySelector('.inputForm');
const nextBtn = document.querySelector('.js-next');
//const galleryIt = document.querySelector('.gallery');
const gallery = new SimpleLightbox('.gallery a');
nextBtn.hidden = true;

searchForm.addEventListener('submit', onClickSubmit);

async function onClickSubmit(event) {
  gallery.innerHTML = '';
  nextBtn.hidden = true;
  event.preventDefault();
  options.params.q = await inputForm.value;
  options.params.page = 1;
  const data = await fetchImage().catch(error => console.log(error));

  if (options.params.q.length > 0 && data.hits.length > 0) {
    createCard(data, gallery, 'on');
    nextBtn.hidden = false;
  } else {
    nextBtn.hidden = true;
    let texError =
      options.params.q.length === 0
        ? 'Please, enter the data for the request!'
        : 'Ooops, there are no images matching your search query. Please try again.';
    Notiflix.Notify.failure(texError);
  }
}
nextBtn.addEventListener('click', onBtnNextClick);

async function onBtnNextClick() {
  options.params.page += 1;

  // nextPage();
  const data = await fetchImage().catch(error => console.log(error));

  createCard(data, gallery, 'off');
}

// function SimpleLight() {
//   let gallery = new SimpleLightbox('.gallery a');
//   gallery.on('show.simplelightbox', function () {
//     captionsDelay: 250;
//   });
// }
