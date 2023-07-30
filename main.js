const scrollBtn = document.querySelector('.scroll-to-top');
const section4 = document.querySelector('.section-4');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }

    const section4Top = section4.getBoundingClientRect().top;
    if (section4Top < window.innerHeight) {
        scrollBtn.style.backgroundColor = '#440381';
    } else {
        scrollBtn.style.backgroundColor = '#3332BB';
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});