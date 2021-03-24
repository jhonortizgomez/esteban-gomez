document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu-left').classList.toggle('show')
});

ScrollReveal().reveal('.article-container');
ScrollReveal().reveal('.social', {delay: 500});
ScrollReveal().reveal('.footer-links', {delay: 500});
ScrollReveal().reveal('.footer', {delay: 500});