const carousel = document.querySelector(".carousels"),
arrowIcons = document.querySelectorAll(".wrapper i");
firstImg = carousel.querySelectorAll("img")[0];
let firstImgWidth = firstImg.clientWidth;

let carousels = document.querySelectorAll('.carousel');
let circles = document.querySelectorAll('.circle')
let currentCarousel = 1;

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
    })
})

/*
arrowIcons.forEach(icon=>{
    icon.addEventListener("click", ()=>{
        carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
    })
})
*/


/*setInterval(()=>{carousel.scrollLeft+=1200 },3000)*/;


let next = document.getElementById('right');
let prev = document.getElementById('left');

next.addEventListener('click', slideNext);
prev.addEventListener('click', slidePrev);
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

function slidePrev(){
    debugger;
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



