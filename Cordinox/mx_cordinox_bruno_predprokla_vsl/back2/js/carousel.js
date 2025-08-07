const modal =  document.querySelector('.phone_popup')
const close =  document.querySelector('.phone_close')
const open =  document.querySelector('.button-header')

open.addEventListener('click', () => {
modal.style.display = 'block'
})
close.addEventListener('click', () => {
modal.style.display = 'none'
})

function initSlider(sliderElement) {
  let slideIndex = 0;
  let slideInterval;

  const slides = sliderElement.querySelector('.slides');
  const dotsContainer = sliderElement.querySelector('.dots');
  const prevButton = sliderElement.querySelector('.prev');
  const nextButton = sliderElement.querySelector('.next');

  function showSlide(index) {
    const slideWidth = slides.children[0].offsetWidth;
    const slideOffset = -index * slideWidth;
    slides.style.transform = `translateX(${slideOffset}px)`;
    updateDots();
  }

  function prevSlide() {
    const slideCount = slides.children.length;
    slideIndex = slideIndex === 0 ? slideCount - 1 : slideIndex - 1;
    showSlide(slideIndex);
  }

  function nextSlide() {
    const slideCount = slides.children.length;
    slideIndex = (slideIndex + 1) % slideCount;
    showSlide(slideIndex);
  }

  function createDots() {
    const slideCount = slides.children.length;
    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === 0) {
        dot.classList.add('active');
      }
      dot.addEventListener('click', () => {
        slideIndex = i;
        showSlide(slideIndex);
        resetAutoSlide();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      if (index === slideIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function autoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function resetAutoSlide() {
    clearInterval(slideInterval);
    autoSlide();
  }

  createDots();
  showSlide(slideIndex);
  autoSlide();

  prevButton.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
  });

  nextButton.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.slider').forEach(sliderElement => {
    initSlider(sliderElement);
  });
});
