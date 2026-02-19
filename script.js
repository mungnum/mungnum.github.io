// Select all banners
document.querySelectorAll('.parallax-banner').forEach(banner => {
  const layers = banner.querySelectorAll('.parallax-layer');

  window.addEventListener('scroll', () => {
    const offset = window.pageYOffset;
    layers.forEach(layer => {
      const speed = parseFloat(layer.dataset.speed) || 0.5; // default 0.5 if not set
      layer.style.transform = `translateY(${offset * speed}px)`;
    });
  });
});
