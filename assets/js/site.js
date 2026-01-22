(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if (revealItems.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealItems.forEach((item) => observer.observe(item));
  }

  if (window.Parallax) {
    document.querySelectorAll('[data-parallax-scene]').forEach((scene) => {
      new window.Parallax(scene, {
        relativeInput: true,
        hoverOnly: true,
      });
    });
  }
})();
