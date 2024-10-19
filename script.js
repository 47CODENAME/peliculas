let loadMoreBtn2 = document.querySelector('#load-more-2');
let currentItem2 = 4;

loadMoreBtn2.onclick = () => {

    let boxes = [...document.querySelectorAll('.box-container-2 .box-2')];

    for (let i = currentItem2; i < currentItem2 + 4 && i < boxes.length; i++) {
        boxes[i].style.display = 'inline-block';
    }

    currentItem2 += 4;
    if (currentItem2 >= boxes.length) {
        loadMoreBtn2.style.display = 'none';
    }
    
};

let loadMoreBtn3 = document.querySelector('#load-more-3');
let currentItem3 = 4;

loadMoreBtn3.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-3 .box-3')];
    for (let i = currentItem3; i < currentItem3 + 4 && i < boxes.length; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem3 += 4;
    if (currentItem3 >= boxes.length) {
        loadMoreBtn3.style.display = 'none';
    }
};

const carruselContainer = document.querySelector('.carrusel-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function updateCarrusel() {
    const items = document.querySelectorAll('.carrusel-item');
    const totalItems = items.length;

    let visibleItems;
    if (window.innerWidth < 480) {
        visibleItems = 1;
    } else if (window.innerWidth < 768) {
        visibleItems = 2;
    } else {
        visibleItems = 3;
    }

    const maxIndex = totalItems - visibleItems;
    const translateXValue = -(currentIndex * 100) / visibleItems; 


    if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    carruselContainer.style.transform = `translateX(${translateXValue}%)`;
}

nextBtn.addEventListener('click', () => {
    const items = document.querySelectorAll('.carrusel-item');
    const totalItems = items.length;
    let visibleItems = window.innerWidth < 480 ? 1 : window.innerWidth < 768 ? 2 : 3;

    if (currentIndex < totalItems - visibleItems) {
        currentIndex += 1;
    } else {
        currentIndex = 0;
    }
    updateCarrusel();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
    } else {
        currentIndex = 0;
    }
    updateCarrusel();
});

window.addEventListener('resize', updateCarrusel);



