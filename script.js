// JavaScript for form handling on contact.html

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {  // Only run if form exists (on contact.html)
        const response = document.getElementById('form-response');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Simple client-side validation (Formspree handles server-side)
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                response.textContent = 'Please fill in all fields.';
                response.style.color = 'red';
                return;
            }

            // Submit the form (Formspree will handle sending the email to you)
            const formData = new FormData(form);
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Success
                    document.getElementById('form-response').textContent = 'Message sent successfully! I\'ll get back to you soon.';
                    document.getElementById('form-response').style.color = 'green';
                    form.reset(); // Clear the form
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('form-response').textContent = 'Oops! Something went wrong. Please try again.';
                document.getElementById('form-response').style.color = 'red';
            });

            
        });
    }
});