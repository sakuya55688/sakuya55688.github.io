
/* control slider*/
let mousedown = false;
let swipeDirection = 1;
let startX, scrollLeft;
const slider = document.querySelector(".swiper-wrapper");

slider.addEventListener("mousedown", (e) => {
    mousedown = true;
    slider.classList.add("active");

    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseup", (e) => {
    mousedown = false;
    slider.classList.remove("active");
    console.log("dot position:", (slider.scrollLeft / 440));
    /* switch navigation dot*/
    
});
slider.addEventListener("mouseleave", (e) => {
    mousedown = false;
    slider.classList.remove("active");
    
});
slider.addEventListener("mousemove", (e) => {
    if(!mousedown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const scroll = (x - startX) * 3; //scroll faster
    slider.scrollLeft = scrollLeft - scroll;

    console.log("scrollleft:", scroll);
});

