window.sr = ScrollReveal();
sr.reveal('.item_logo', {
    duration: 4000,
    origin: 'bottom',
    distance: '-100px',})
    
sr.reveal('.carousel', {
    duration: 4000,
    origin: 'left',
    distance: '-200px',}) 

sr.reveal('.gallery-container', {
    duration: 4000,
    origin: 'left',
    distance: '-100px',}) 

 sr.reveal('.deco-box', {
    duration: 4000,
    origin: 'rigth',
    distance: '-100px',}) 

sr.reveal('.medida-box', {
    duration: 4000,
    origin: 'left',
    distance: '-100px',}) 

sr.reveal('.footer', {
    duration: 2000,
    origin: 'top',
    distance: '-200px'  
});
window.addEventListener("load", function () {
    document.getElementById("loader").classList.toggle("loader2")

});


let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function () {
    sidebar.classList.toggle("active");
    if (btn.classList.contains("bx-menu")) {
        btn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        btn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}
searchBtn.onclick = function () {
    sidebar.classList.toggle("active");
}

