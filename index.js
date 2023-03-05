
// ********** TASKS FOR SATURDAY *******
/*
- Lazy loading images
- Responsive CSS grid
    - 3 x common viewports
- Unit tests for JS

*/


const NUMBER_OF_IMAGES = 150;
const IMG_WIDTH = 400;
const IMG_HEIGHT = 300;

const containerEl = document.getElementById('container');

const createImage = async() => {
    const imageElement = document.createElement('img');
    imageElement.classList.add('img');
    imageElement.src = `https://picsum.photos/${IMG_WIDTH}/${IMG_HEIGHT}?random=${Math.floor(Math.random() * 100)}`;
    // imageElement.loading = 'lazy';
    return Promise.resolve(imageElement);
};

const loadImage = async(elem) => {
    return new Promise((resolve, reject) => {
        elem.onload = () => resolve(elem);
        elem.onerror = reject;
    });
};

const appendImage = async(img) => {
    containerEl.appendChild(img);
};

const addImage = async() => {
    try {
        const img = await createImage();
        console.log("🚀 ~ file: index.js:40 ~ addImage ~ img:", img)
        const loadedImage = await loadImage(img);
        console.log("🚀 ~ file: index.js:42 ~ addImage ~ loadedImage:", loadedImage)
        if (img.complete) {
            return appendImage(loadedImage);
        }
    } catch(err) {
        console.error(err);
    }
};


const addImages = async (imageCount) => {
    for (let i = 0; i < imageCount; i++) {
        addImage();
    }

};

document.addEventListener('DOMContentLoaded', async() => {
    await addImages(NUMBER_OF_IMAGES);

    const images = document.querySelector('.img');

    const options = {
        root: document.querySelector('#container'),
        rootMargin: '10px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((elements) => {
        elements.forEach((element) => console.log('element', element));
    }, options);

    const target = document.querySelector('.grid');
    observer.observe(target);
    console.log("🚀 ~ file: index.js:82 ~ document.addEventListener ~ images:", images)
});



