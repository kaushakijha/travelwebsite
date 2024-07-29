// Function to handle login form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Get login input
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Perform login validation
    if (email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Retrieve signed-up email and password from storage
    var signedUpEmail = localStorage.getItem('signedUpEmail');
    var signedUpPassword = localStorage.getItem('signedUpPassword');

    // Check if the entered email matches the signed-up email
    if (email !== signedUpEmail || password !== signedUpPassword) {
        alert('Invalid email or password. Please try again.');
        return;
    }

    // If credentials are correct, log in the user
    localStorage.setItem('isLoggedIn', 'true');

    // Log the login data for demonstration purposes
    console.log('Email:', email);
    console.log('Password:', password);

    // Optionally, reset the form after successful login
    document.getElementById('loginForm').reset();

    // Redirect to dashboard or home page after successful login
    window.location.href = 'dashboard.html'; // Change 'dashboard.html' to the actual dashboard page URL

    // Display thank you message
    alert('Thank you for logging into your account.');
}

// Function to handle logout
function handleLogout() {
    localStorage.setItem('isLoggedIn', 'false');
    alert('You have successfully logged out.');
    window.location.href = 'index.html'; // Change 'index.html' to the actual login page URL
}

// Function to check login state on page load
function checkLoginState() {
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        // User is logged in, display logout button
        document.getElementById('logoutButton').style.display = 'block';
        document.getElementById('loginForm').style.display = 'none';
    } else {
        // User is not logged in, hide logout button
        document.getElementById('logoutButton').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    }
}

// Add event listener to the login form
document.getElementById('loginForm').addEventListener('submit', handleLogin);

// Add event listener to the logout button
document.getElementById('logoutButton').addEventListener('click', handleLogout);

// Check login state on page load
window.onload = checkLoginState;
