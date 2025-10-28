// Import your global styles
import './styles/main.css';

// =========================
// 🕒 Dynamic Footer Year
// =========================
const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

// =========================
// 🌌 Particle Background Animation
// =========================
(function () {
  const canvas = document.getElementById('bgParticles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let w, h, particles = [], RAF;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    spawnParticles();
  }

  function spawnParticles() {
    const count = Math.min(120, Math.floor((w * h) / 16000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.35 + 0.35,
      a: Math.random() * 0.5 + 0.35
    }));
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(34, 211, 238, ${p.a})`;
      ctx.fill();
    });

    RAF = requestAnimationFrame(animate);
  }

  function start() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    resize();
    cancelAnimationFrame(RAF);
    animate();
  }

  window.addEventListener('resize', resize);
  start();
})();

// =========================
// 💬 Navigation Highlight
// =========================
(function () {
  const links = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname.split('/').pop();

  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
})();

// =========================
// 🚀 Console Greeting
// =========================
console.log('%cPortfolio loaded successfully ✨', 'color:#0ff; font-weight:bold;');
