const revealEls = document.querySelectorAll('.reveal');
const showOnScroll = () => {
  revealEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 90) el.classList.add('active');
  });
};
window.addEventListener('scroll', showOnScroll);
showOnScroll();

const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', e => {
  if (!glow) return;
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});
