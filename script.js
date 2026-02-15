// Side panel toggle
const navToggle = document.querySelector('.nav-toggle');
const sidePanel = document.querySelector('.side-panel');
const sidePanelOverlay = document.querySelector('.side-panel-overlay');
const sidePanelClose = document.querySelector('.side-panel-close');

function openPanel() {
  sidePanel.classList.add('active');
  sidePanelOverlay.classList.add('active');
  navToggle.classList.add('active');
  sidePanel.setAttribute('aria-hidden', 'false');
  navToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closePanel() {
  sidePanel.classList.remove('active');
  sidePanelOverlay.classList.remove('active');
  navToggle.classList.remove('active');
  sidePanel.setAttribute('aria-hidden', 'true');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

navToggle.addEventListener('click', () => {
  if (sidePanel.classList.contains('active')) {
    closePanel();
  } else {
    openPanel();
  }
});

sidePanelClose.addEventListener('click', closePanel);
sidePanelOverlay.addEventListener('click', closePanel);

// Close panel when a link is clicked
sidePanel.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closePanel);
});

// Close panel on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && sidePanel.classList.contains('active')) {
    closePanel();
  }
});

// Shrink nav on scroll
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.padding = '0.6rem 2rem';
  } else {
    nav.style.padding = '1rem 2rem';
  }
});

// Fade-in sections on scroll
const sections = document.querySelectorAll('.experience, .projects, .beyond-tech, .about');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  sectionObserver.observe(section);
});

// Staggered timeline item animations
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const item = entry.target;
      const delay = Array.from(timelineItems).indexOf(item) * 150;
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      }, delay);
      timelineObserver.unobserve(item);
    }
  });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-15px)';
  item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  timelineObserver.observe(item);
});
