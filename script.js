document.querySelectorAll('.parallax-banner').forEach(banner => {
  const layers = banner.querySelectorAll('.parallax-layer');

  // Assign z-index from data-z attribute (fallback to order)
  layers.forEach((layer, i) => {
    layer.style.zIndex = layer.dataset.z || i + 1;
  });

  window.addEventListener('scroll', () => {
    const offset = window.pageYOffset;
    layers.forEach(layer => {
      const speed = parseFloat(layer.dataset.speed) || 0.5;
      layer.style.transform = `translateY(${offset * speed}px)`;
    });
  });
});
