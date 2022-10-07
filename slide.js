let slides = document.getElementsByClassName("slider__slide");// The first line goes through our markup, finds every element 
//called slider__slide and stores a pointer to it in an array called slides. 
let navlinks = document.getElementsByClassName("slider__navlink");//The next line does the same for our elements
//this time putting them in an array called navlinks.
let currentSlide = 0;//Variable that keeps track of which slide is active


//event listeners to each of our buttons so that when a user clicks one of these buttons
//our image slider JavaScript source code will call a function called changeSlide 
//and pass an argument - currentSlide + 1 for the forwards button, and currentSlide - 1 for the backwards one.
document.getElementById("nav-button--next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("nav-button--prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});


//Function that will change the slide
//changeSlide takes one argument, moveTo, which is the number of the slide you want to change to.
//The first line checks if moveTo is equal to or greater than slides.length, 
//that would mean we're on the final slide, and trying to move forward. In this case, moveTo is set to 0 
//which would take us back to the first slide.
//The next line does the same if the user tries to go backwards from the first slide  it'll just loop them to the final slide
//The next four lines use the slides and navlinks arrays we created earlier. By using classList.toggle("active"), 
//the code will remove the active class from the current slide, and add it to the one we're trying to move to.
//It is then set currentSlide to equal moveTo, since that's the active slide now.

function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
    
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}

//querySelectorAll is used to grab all of the slider__navlink elements, and then we're using forEach to loop through them.
//on the first loop, bullet will point to the first slide, and bulletIndex will equal 0.
//With the next loop, bullet will point to the second slide, and bulletIndex will equals 1.
//And so on so that if they click a button, we know they want to change to slide bulletIndex 
//so we can just pass that value to our funtion with changeSlide(bulletIndex).
document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    });
});