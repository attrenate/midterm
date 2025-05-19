
document.addEventListener('DOMContentLoaded', () => {
  const categoryCards = document.querySelectorAll('.category-card');
  
  // click event listener to each card
  categoryCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      
      // the category label from the card
      const label = card.querySelector('h5').textContent;
      console.log(`Category clicked: ${label}`);
      
      // active class to clicked card
      categoryCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      
      
    });
  });

  // hover effects
  categoryCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  // responsive behavior
  function handleResize() {
    const grid = document.querySelector('.category-grid');
    if (!grid) return;

    const width = window.innerWidth;
    if (width <= 480) {
      grid.style.gridTemplateColumns = '1fr';
    } else if (width <= 768) {
      grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else {
      grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    }
  }

  // Initial call to set the correct grid layout
  handleResize();

  // Listen for window resize
  window.addEventListener('resize', handleResize);

  // smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // loading animation for images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
  });

  // keyboard navigation
  document.addEventListener('keydown', (e) => {
    const activeCard = document.querySelector('.category-card.active');
    if (!activeCard) return;

    const cards = Array.from(categoryCards);
    const currentIndex = cards.indexOf(activeCard);

    switch(e.key) {
      case 'ArrowRight':
        if (currentIndex < cards.length - 1) {
          cards[currentIndex + 1].click();
        }
        break;
      case 'ArrowLeft':
        if (currentIndex > 0) {
          cards[currentIndex - 1].click();
        }
        break;
    }
  });
});