document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let errorMessages = [];

    // Validate Name
    const name = document.getElementById('name').value;
    if (name.length < 2) {
        errorMessages.push('Name must be at least 2 characters long.');
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessages.push('Please enter a valid email address.');
    }

    // Validate Message
    const message = document.getElementById('message').value;
    if (message.length < 10) {
        errorMessages.push('Message must be at least 10 characters long.');
    }

    // Display Errors or Submit Form
    const errorMessagesDiv = document.getElementById('errorMessages');
    errorMessagesDiv.innerHTML = '';
    if (errorMessages.length > 0) {
        errorMessages.forEach(function(error) {
            const errorElement = document.createElement('p');
            errorElement.textContent = error;
            errorMessagesDiv.appendChild(errorElement);
        });
    } else {
        // Submit the form (you can also perform an AJAX request here)
        alert('Form submitted successfully!');
        // document.getElementById('contactForm').submit(); // Uncomment this to actually submit the form
    }
});
