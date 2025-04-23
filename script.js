// Initialize AOS (Animate On Scroll)
AOS.init();

// Modal Image Zoom-in Effect
document.querySelectorAll('.portfolio-item img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = new bootstrap.Modal(document.getElementById('portfolioModal'));
    const modalImage = document.getElementById('modalImage');
    modalImage.src = img.src;
    modal.show();
  });
});
