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
  //const data = await fetchImage().catch(error => console.log(error));
  options.params.q = await inputForm.value;
  options.params.page = 1;
  if (!options.params.q) {
    nextBtn.hidden = true;
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    ///  не правильна
  } else if (options.params.q.length > 0) {
    fetchImage()
      .then(data => createCard(data, gallery, 'on'))
      .catch(error => console.log(error));
    nextBtn.hidden = false;
    console.log(1);
    //костиль 10 на 40
  } else {
    nextBtn.hidden = true;

    Notiflix.Notify.failure(
      'Ooops, there are no images matching your search query. Please try again.'
    );
    console.log(2);
  }

  // SimpleLight();

  // new SimpleLightbox('.gallery a', {
  //   captionsDelay: 250,
  // });
  // photoCard.addEventListener('click', onClickCard);
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
