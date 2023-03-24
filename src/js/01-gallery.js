// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `
<a class="gallery__item" href="${original}">
  <img data-caption="${description}" class="gallery__image" src="${preview}" alt="${description}" />
</a>
`
  )
  .join('');

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

const galeryBox = new SimpleLightbox('.gallery a', {
  captionType: 'data',
  captionsData: 'caption',
  captionPosition: 'top',
  captionDelay: 250,
  navText: ['⇦', '⇨'],
  swipeClose: false,
  animationSpeed: 500,
  docClose: false,
  disableRightClick: true,
});