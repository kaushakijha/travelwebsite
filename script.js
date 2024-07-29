// JavaScript code for countdown timer
// Replace the countdown date and time with your actual offer end date and time
const offerEnd = new Date('2024-06-01T00:00:00').getTime();

const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = offerEnd - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown-timer').innerHTML = `${days} days ${hours}:${minutes}:${seconds}`;

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown-timer').innerHTML = 'Offer expired';
    }
}, 1000);
