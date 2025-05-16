// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // You would typically send this data to a server here
        // For now, just show an alert
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');
        
        // Reset the form
        contactForm.reset();
      });
    }
  });
  