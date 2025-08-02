document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.animation = `fadeInUp 0.5s ease forwards`;
    card.style.animationDelay = `${index * 100}ms`;
  });
});