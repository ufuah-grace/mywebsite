// Wrap in a 'DOMContentLoaded' listener to ensure the page is ready
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  
  // Check if slides actually exist to avoid errors
  if (slides.length === 0) {
    console.error("No slides found! Check your HTML class names.");
    return;
  }

  let currentIndex = 0;

  function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
  }

  // Start the timer
  setInterval(showNextSlide, 5000);
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
