document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  // Function to handle form submission
  const handleFormSubmit = async (event) => {
      event.preventDefault(); // Prevent form from submitting the traditional way
      document.getElementById('result').textContent = 'Sending....';

      const formData = new FormData(event.target);
      formData.append('access_key', 'a61c5ca7-8ca8-4270-966e-94dd57b1ad5d');

      // Retrieve form values
      const name = contactForm.elements['name'].value.trim();
      const email = contactForm.elements['email'].value.trim();
      const message = contactForm.elements['message'].value.trim();

      // Validate form fields
      if (!name || !email || !message) {
          alert('Please fill in all fields.');
          document.getElementById('result').textContent = '';
          return;
      }

      // Store form data in session storage
      sessionStorage.setItem('contactFormData', JSON.stringify({ name, email, message }));

      try {
          const response = await fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              body: formData
          });

          const data = await response.json();

          if (data.success) {
              document.getElementById('result').textContent = 'Form Submitted Successfully';
              successMessage.classList.remove('hidden');
              event.target.reset();
          } else {
              console.log('Error', data);
              document.getElementById('result').textContent = data.message;
          }
      } catch (error) {
          console.error('Error:', error);
          document.getElementById('result').textContent = 'An error occurred while submitting the form.';
      }
  };

  // Add event listener for form submission
  contactForm.addEventListener('submit', handleFormSubmit);
});
