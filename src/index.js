import './sass/main.scss';
import himilayan340 from './images/himilayan-blue-poppy-4202825__340.jpg';
import himilayan1280 from './images/himilayan-blue-poppy-4202825_1280.jpg';
import container340 from './images/container-4203677__340.jpg';
import container1280 from './images/container-4203677_1280.jpg';
import beach340 from './images/beach-4206785__340.jpg';
import beach1280 from './images/beach-4206785_1280.jpg';
import flowers340 from './images/flowers-1835619__340.jpg'
import flowers1280 from './images/flowers-1835619_1280.jpg';
import alps340 from './images/the-alps-4209272__340.jpg';
import alps1280 from './images/the-alps-4209272_1280.jpg';
import mountains340 from './images/mountains-3674334__340.jpg';
import mountains1280 from './images/mountains-3674334_1280.jpg';
import landscape340 from './images/landscape-4208255__340.jpg';
import landscape1280 from './images/landscape-4208255_1280.jpg';
import landscape340a from './images/landscape-4208571__340.jpg';
import landscape1280a from './images/landscape-4208571_1280.jpg';
import lighthouse340 from './images/lighthouse-4208843__340.jpg';
import lighthouse1280 from './images/lighthouse-4208843_1280.jpg';

 export const galleryItems = [
  {
    preview: himilayan340,
    original: himilayan1280,
    description: 'Hokkaido Flower',
  },
  {
    preview: container340,
    original: container1280,
    description: 'Container Haulage Freight',
  },
  {
    preview: beach340,
    original: beach1280,
    description: 'Aerial Beach View',
  },
  {
    preview: flowers340,
    original: flowers1280,
    description: 'Flower Blooms',
  },
  {
    preview: alps340,
    original: alps1280,
    description: 'Alpine Mountains',
  },
  {
    preview: mountains340,
    original: mountains1280,
    description: 'Mountain Lake Sailing',
  },
  {
    preview: landscape340,
    original: landscape1280,
    description: 'Alpine Spring Meadows',
  },
  {
    preview: landscape340a,
    original: landscape1280a,
    description: 'Nature Landscape',
  },
  {
    preview: lighthouse340,
    original: lighthouse1280,
    description: 'Lighthouse Coast Sea',
  },
];

const galleryContainer = document.querySelector('.js-gallery');
const lightboxImgEl = document.querySelector('div.lightbox');
const lightboxImg = document.querySelector(".lightbox__image");
const modal = document.querySelector('.js-lightbox');
const overlay = document.querySelector('.lightbox__overlay');
const closeBtn = document.querySelector('[data-action="close-lightbox"]');

const imagesMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

galleryContainer.addEventListener('click', onGalleryClick);

overlay.addEventListener('click', onCloseBtnlick);

closeBtn.addEventListener('click', onCloseBtnlick);

document.addEventListener('keydown', onEscapePress);

function createGallery(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `;
  })
    .join('');
};

function onGalleryClick(evt) {
  evt.preventDefault();

  const galleryItem = evt.target;
  
  if (galleryItem.nodeName !== 'IMG') {
    return;
  };
  if (galleryItem.nodeName === 'IMG') {
    lightboxImgEl.classList.add("is-open");
    lightboxImg.src = galleryItem.dataset.source;
    lightboxImg.alt = galleryItem.alt;
  }
};

function onCloseBtnlick(evt) {
  evt.preventDefault();
  lightboxImgEl.classList.remove("is-open");
  lightboxImgEl.src = '';
  lightboxImgEl.alt = '';
  window.removeEventListener("click", onCloseBtnlick);
};

function onEscapePress(evt) {
    if (evt.code !== "Escape") {
    return;
  };
  if (evt.code === "Escape") {
      lightboxImgEl.classList.remove("is-open");
      lightboxImgEl.src = '';
      lightboxImgEl.alt = '';
      window.removeEventListener("keydown", onEscapePress);
  };
};