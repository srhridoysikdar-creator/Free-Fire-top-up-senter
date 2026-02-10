// script.js

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Validate input
    if (!name || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Send data to WhatsApp
    const whatsappNumber = '1234567890'; // replace with your WhatsApp number
    const whatsappMessage = encodeURIComponent(`Name: ${name}
Message: ${message}`);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, '_blank'); // Open WhatsApp in a new tab
}

// Attach event listener to the form
const form = document.getElementById('contactForm'); // replace with your form ID
form.addEventListener('submit', handleFormSubmit);