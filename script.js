const carousel = document.querySelector(".carousels"),
arrowIcons = document.querySelectorAll(".wrapper i");
firstImg = carousel.querySelectorAll("img")[0];
let firstImgWidth = firstImg.clientWidth;

let carousels = document.querySelectorAll('.carousel');
let circles = document.querySelectorAll('.circle')
let currentCarousel = 1;


let myInterval= setInterval(()=>{
    slideNext();
},3000);


let navigation = function (nav){
    currentCarousel = nav + 1
    carousels.forEach((carousel)=>{
        carousel.classList.remove('active');

        circles.forEach((circle)=>{
            circle.classList.remove('active')
        });
    });
    carousels[nav].classList.add('active');
    circles[nav].classList.add('active');
    carousel.scrollLeft = firstImgWidth * nav;
}

circles.forEach((btn,i) =>{
    btn.addEventListener('click', ()=>{
        navigation(i);
        if(myInterval) {
            clearInterval(myInterval);
        }
        myInterval = setInterval(() => {
            slideNext()
        }, 3000)
    })
})

let next = document.getElementById('right');
let prev = document.getElementById('left');

next.addEventListener('click', () => {
    if(myInterval) {
        clearInterval(myInterval);
    }
    myInterval = setInterval(() => {
        slideNext()
    }, 3000)
    slideNext()
});
prev.addEventListener('click', ()=>{
    if(myInterval) {
        clearInterval(myInterval);
    }
    myInterval = setInterval(() => {
        slideNext()
    }, 3000)
    slidePrev();
});
function slideNext(){
    carousel.scrollLeft += firstImgWidth
    carousels.forEach((carousel)=>{
        carousel.classList.remove('active');

        circles.forEach((circle)=>{
            circle.classList.remove('active')
        });
    });
    if(currentCarousel > carousels.length - 1){
        currentCarousel = 1;
        carousel.scrollLeft = 0;
    } else {
        currentCarousel++
    }
    carousels[currentCarousel - 1].classList.add('active');
    circles[currentCarousel - 1].classList.add('active');
}

// function autoNext(){
//     carousel.scrollLeft += firstImgWidth
//     carousels.forEach((carousel)=>{
//         carousel.classList.remove('active');
//
//         circles.forEach((circle)=>{
//             circle.classList.remove('active')
//         });
//     });
//     if(currentCarousel > carousels.length - 1){
//         currentCarousel = 1;
//         carousel.scrollLeft = 0;
//     } else {
//         currentCarousel++
//     }
//     carousels[currentCarousel - 1].classList.add('active');
//     circles[currentCarousel - 1].classList.add('active');
// }

// if(next || prev){
//     clearInterval(myInterval);
//     myInterval()
// }

function slidePrev(){
    carousels.forEach((carousel)=>{
        carousel.classList.remove('active');

        circles.forEach((circle)=>{
            circle.classList.remove('active')
        });
    });
    if(currentCarousel <= 1){
        currentCarousel = carousels.length;
        carousel.scrollLeft = carousels.length * firstImgWidth;
    } else {
        currentCarousel--
        carousel.scrollLeft -= firstImgWidth
    }
    carousels[currentCarousel - 1].classList.add('active');
    circles[currentCarousel - 1].classList.add('active');
}



