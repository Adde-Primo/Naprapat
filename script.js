
const heroImages = [
    './pic/hero-foto.jpg',
    './pic/hero-foto1.png',
    './pic/hero-foto2.png',
];

const heroSection = document.querySelector('.hero');
let currentImageIndex = 0;

function changeHeroImage() {
    heroSection.style.backgroundImage = `url('${heroImages[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
}

setInterval(changeHeroImage, 4000);
changeHeroImage();

// Simple form submission handling
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Förhindra standardbeteendet för formulärsubmit
    alert('Tack för ditt meddelande! Vi återkommer så snart som möjligt.');
    // Här kan du lägga till kod för att skicka formulärdata till en server (t.ex. med fetch eller XMLHttpRequest)
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    // Öppna/stäng hamburgermeny
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Stäng menyn när en länk klickas
    const navItems = navLinks.querySelectorAll('a'); // Välj alla länkar i menyn
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active'); // Stäng menyn
        });
    });
}