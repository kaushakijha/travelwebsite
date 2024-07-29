document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get form values
  var destination = document.getElementById('destination').value.trim();
  var date = document.getElementById('date').value.trim();

  // Validate form inputs
  if (destination === '' || date === '') {
    alert('Please fill out all fields.');
    return;
  }

  // Display booking summary
  document.getElementById('summaryDestination').textContent = destination;
  document.getElementById('summaryDate').textContent = date;
  document.getElementById('bookingSummary').style.display = 'block';

  // Save booking details to local storage
  localStorage.setItem('bookingDestination', destination);
  localStorage.setItem('bookingDate', date);
});

document.getElementById('modifyBooking').addEventListener('click', function() {
  // Hide booking summary and show booking form
  document.getElementById('bookingSummary').style.display = 'none';
});

document.getElementById('confirmBooking').addEventListener('click', function() {
  // Retrieve booking details from local storage
  var destination = localStorage.getItem('bookingDestination');
  var date = localStorage.getItem('bookingDate');

  // Simulate booking process (you can replace this with your actual booking logic)
  setTimeout(function() {
    // Display booking confirmation message
    var bookingResult = document.getElementById('bookingResult');
    bookingResult.innerHTML = '<p>Booking confirmed for <strong>' + destination + '</strong> on <strong>' + date + '</strong>!</p>';

    // Clear local storage after booking confirmation
    localStorage.removeItem('bookingDestination');
    localStorage.removeItem('bookingDate');
  }, 1000);
});
