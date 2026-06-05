// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add floating particles (light effect)
const heroBg = document.querySelector('.hero-bg');
if(heroBg) {
    setInterval(() => {
        heroBg.style.transform = `translate(${Math.random() * 5}px, ${Math.random() * 5}px)`;
    }, 3000);
}