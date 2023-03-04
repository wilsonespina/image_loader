
// ********** TASKS FOR SATURDAY *******
/*
- Lazy loading images
- Responsive CSS grid
    - 3 x common viewports
- Unit tests for JS

*/


const NUMBER_OF_IMAGES = 20;


/*
1. create img DOM element
    - add img attributes (img url, classes)

2. load 1 image
3. wait until image is loaded
4. repeat 1 - 3 X NUMBER_OF_IMAGES times

*/

const IMG_WIDTH = 500;
const IMG_HEIGHT = 300;

const createImage = () => {
    const imageElement = document.createElement('img');
    imageElement.classList.add('img');
    imageElement.srcset = `https://picsum.photos/${IMG_HEIGHT}/${IMG_WIDTH}?random=${Math.floor(Math.random() *100)}`
};


