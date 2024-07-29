// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    var fullName = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Perform form validation
    if (fullName.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Store the signed-up email and password securely
    localStorage.setItem('signedUpEmail', email);
    localStorage.setItem('signedUpPassword', password);

    // Log the form data for demonstration purposes
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);

    // Optionally, reset the form after successful submission
    document.getElementById('signupForm').reset();

    // Display thank you message
    alert('Thank you for signing up!');

    // Redirect to login page
    window.location.href = 'login.html';
}

// Add event listener to the form
document.getElementById('signupForm').addEventListener('submit', handleSubmit);
