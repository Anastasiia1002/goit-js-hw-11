const gallery = document.querySelector('.gallery');

export function createCard(data, galleryBox, one) {
  const markup = data.hits
    .map(
      ({
        largeImageURL,
        webformatURL,
        comments,
        downloads,
        views,
        likes,
        tags,
      }) => {
        return `
      <a href="${largeImageURL}" class="gallery__item" ">
<div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <ul class="info-item">
      <li><b>Likes </b></li>
      <li class ="items"> ${likes}</li>
    </ul>
    <ul class="info-item">
      <li><b>Views</b></li>
      <li class ="items"> ${views}</li>
    </ul>
    <ul class="info-item">
      <li><b>Comments</b></li>
      <li class ="items"> ${comments}</li>
    </ul>
    <ul class="info-item">
      <li><b>Downloads</b></li>
       <li  class ="items"> ${downloads}</li>
    </ul>
  </div>
</div>
</a>
`;
      }
    )
    .join('');
  if (one === 'on') {
    gallery.innerHTML = markup;
  } else if (one === 'off') {
    gallery.innerHTML += markup;
  }

  galleryBox.refresh();
}

//onclick="return false
