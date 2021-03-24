document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu-left').classList.toggle('show');
});

ScrollReveal().reveal('.show-case');
ScrollReveal().reveal('.new-cards', { delay: 500});
ScrollReveal().reveal('.card-banner-one', {delay: 500});
ScrollReveal().reveal('.card-banner-two', {delay: 500});
ScrollReveal().reveal('.social', {delay: 500});
ScrollReveal().reveal('.footer-links', {delay: 500});
ScrollReveal().reveal('.footer', {delay: 500});