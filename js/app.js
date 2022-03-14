const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbar = document.getElementsByClassName('nav')[0];

let button = document.querySelector(".cv-btn");
//console.log(button);

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

button.addEventListener("click", ()=> {

    const span = document.querySelector(".cv-btn span");

    button.style.paddingRight = '10px';
    span.style.visibility = "visible";
    setTimeout(()=>{
        span.style.visibility = "hidden";
        button.style.transition = ".3s ease-in-out";
        button.style.paddingRight = "0px";
    }, 3000);

});