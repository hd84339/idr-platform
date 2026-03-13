// ─── NAV SCROLL ───
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ─── HAMBURGER ───
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobile-menu');
ham.addEventListener('click', () => {
  mob.classList.toggle('open');
});
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => mob.classList.remove('open'));
});

// ─── SCROLL REVEAL ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ─── FORM ───
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('form-success').style.display = 'block';
    btn.style.display = 'none';
    e.target.reset();
  }, 1000);
}

// ─── SMOOTH SCROLL ───
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 68;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
