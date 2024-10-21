const buttonShow = document.querySelector('.menu-showing');
const buttonHide = document.querySelector('.menu-hide');
const navMenu = document.querySelector('.navbar');


buttonHide.addEventListener('click', hideMenu);
buttonShow.addEventListener('click', showMenu);

function showMenu() {
    navMenu.style.display = 'block';
    buttonShow.style.display = 'none';
    buttonHide.style.display = 'block';
}

function hideMenu() {
    navMenu.style.display = 'none';
    buttonHide.style.display = 'none';
    buttonShow.style.display = 'block';
}

function handleResize() {
    if (window.innerWidth > 1000) {
        navMenu.style.display = "flex";
        buttonShow.style.display = "none";
        buttonHide.style.display = "none";  
    } else {
        navMenu.style.display = "none";  
        buttonShow.style.display = "block";
        buttonHide.style.display = "none";  
    }
}


window.addEventListener("resize", handleResize);
handleResize();
