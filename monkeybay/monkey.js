document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.querySelector('.search-form');    const carouselImages = document.querySelectorAll('.carousel img');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const searchTerm = document.querySelector('.search-form input[type="text"]').value.toLowerCase().trim();

        carouselImages.forEach(image => {
            const altText = image.alt.toLowerCase();

            if (altText.includes(searchTerm) || searchTerm === '') {
                image.parentElement.style.display = 'block';

                image.parentElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                image.parentElement.style.display = 'none';
            }
        });
    });
    carouselImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.parentElement.classList.add('start-carousel');
        });
        image.addEventListener('mouseout', () => {
            image.parentElement.classList.remove('start-carousel');
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});
