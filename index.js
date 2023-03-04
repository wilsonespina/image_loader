
// ********** TASKS FOR SATURDAY *******
/*
- Lazy loading images
- Responsive CSS grid
    - 3 x common viewports
- Unit tests for JS

*/




/*
1. create img DOM element
- add img attributes (img url, classes)

2. load 1 image
3. wait until image is loaded
4. repeat 1 - 3 X NUMBER_OF_IMAGES times

*/

const NUMBER_OF_IMAGES = 300;
const IMG_WIDTH = 400;
const IMG_HEIGHT = 300;

const containerEl = document.getElementById('container');

const createImage = async() => {
    const imageElement = document.createElement('img');
    imageElement.classList.add('img');
    imageElement.src = `https://picsum.photos/${IMG_WIDTH}/${IMG_HEIGHT}?random=${Math.floor(Math.random() * 100)}`;
    // imageElement.loading = 'lazy';
    return new Promise((resolve, reject) => {
        return resolve(imageElement);
    });
};

const loadImage = async(elem) => {
    return new Promise((resolve, reject) => {
        elem.onload = () => resolve(elem);
        elem.onerror = reject;
    });
};

const appendImage = (img) => {
    containerEl.appendChild(img);
};

const addImages = async(multiplier) => {
    const count = multiplier;

    try {
        const img = await createImage();
        const loadedImage = await loadImage(img);
        if (img.complete) {
            return appendImage(loadedImage);
        }

    } catch(err) {
        console.error(err);
    }
};




// const options = {
//     root: document.querySelector('body'),
//     rootMargin: '10px',
//     threshold: 0.5
// };

// const observer = new IntersectionObserver((elements) => {
//     elements.forEach((element) => console.log('element', element));
// }, options);

// const target = document.querySelector('.grid');
// observer.observe(target);





document.addEventListener('DOMContentLoaded', () => {
    // Array.from({ length: NUMBER_OF_IMAGES }, () => addImages());
    addImages(NUMBER_OF_IMAGES);

    const images = document.querySelectorAll('.img');
    console.log("🚀 ~ file: index.js:82 ~ document.addEventListener ~ images:", images)
});



