// Contact form submission alert
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting Rapid Robots! We will get back to you soon.');
  form.reset();
});
