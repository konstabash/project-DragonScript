window.addEventListener('load', () => {
  const coversSection = document.querySelector('#covers');
  const marqueeLines = document.querySelectorAll('.marquee__line');

  if (!coversSection) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          marqueeLines.forEach(
            line => (line.style.animationPlayState = 'running')
          );
        } else {
          marqueeLines.forEach(
            line => (line.style.animationPlayState = 'paused')
          );
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(coversSection);
});
