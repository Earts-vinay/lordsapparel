// Add this script before the closing </body> tag or in a separate JS file
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // You can adjust the scroll threshold
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.aboutnavbar');
    if (window.scrollY > 50) { // You can adjust the scroll threshold
        navbar.classList.add('aboutnavbar-scrolled ');
    } else {
        navbar.classList.remove('aboutnavbar-scrolled ');
    }
});
