import './sass/main.scss';

  const galleryItems = [
  {
    preview:
      './images/himilayan-blue-poppy-4202825__340.jpg',
    original:
      './images/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      './images/container-4203677__340.jpg',
    original:
      './images/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      './images/beach-4206785__340.jpg',
    original:
      './images/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      './images/flowers-1835619__340.jpg',
    original:
      './images/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      './images/the-alps-4209272__340.jpg',
    original:
      './images/the-alps-4209272_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      './images/mountains-3674334__340.jpg',
    original:
      './images/mountains-3674334_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      './images/landscape-4208255__340.jpg',
    original:
      './images/landscape-4208255_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      './images/landscape-4208571__340.jpg',
    original:
      './images/landscape-4208571_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      './images/lighthouse-4208843__340.jpg',
    original:
      './images/lighthouse-4208843_1280.jpg',
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