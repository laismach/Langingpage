const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
const indicators = document.querySelectorAll('.indicator');

let currentSlideIndex = 0;

// Função para atualizar o carrossel
function updateCarousel(index) {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

// Botões de navegação
nextButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateCarousel(currentSlideIndex);
});

prevButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateCarousel(currentSlideIndex);
});

// Indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlideIndex = index;
        updateCarousel(currentSlideIndex);
    });
});
