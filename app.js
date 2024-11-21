// Mobile Menu Toggle
// const menuToggle = document.querySelector('.menu-toggle');
// const sidebar = document.querySelector('.sidebar');

// menuToggle.addEventListener('click', () => {
//     sidebar.classList.toggle('active');
// });

new WOW().init();
// alert("Welcome your Website visit By Saad Memon Rawani")
// document.documentElement.style.setProperty('--animate-duration', '2s');

// document.documentElement.style.setProperty('--animate-duration', '2s');
document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


