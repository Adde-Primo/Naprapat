// Simple form submission handling
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Tack för ditt meddelande! Vi återkommer så snart som möjligt.');
    // Here you can add code to actually send the form data to a server
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

console.log("JavaScript is working!");