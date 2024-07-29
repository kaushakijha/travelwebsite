document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Basic form validation
    const cardName = document.getElementById('card-name').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const expiryDate = document.getElementById('expiry-date').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    
    if (cardName === '' || cardNumber === '' || expiryDate === '' || cvv === '') {
        showMessage('Please fill in all fields.', 'error');
        return;
    }

    if (!validateCardNumber(cardNumber)) {
        showMessage('Invalid card number.', 'error');
        return;
    }

    if (!validateExpiryDate(expiryDate)) {
        showMessage('Invalid expiry date. Use MM/YY format.', 'error');
        return;
    }

    if (!validateCVV(cvv)) {
        showMessage('Invalid CVV.', 'error');
        return;
    }

    // Simulate payment processing
    showMessage('Processing payment...', 'info');
    setTimeout(function() {
        showMessage('Payment successful!', 'success');
    }, 2000);
});

function validateCardNumber(number) {
    return /^\d{16}$/.test(number);
}

function validateExpiryDate(date) {
    return /^(0[1-9]|1[0-2])\/\d{2}$/.test(date);
}

function validateCVV(cvv) {
    return /^\d{3}$/.test(cvv);
}

function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type;
}
