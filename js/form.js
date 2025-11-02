  (function() {
    emailjs.init("NDKKtpO3noBCOC8ex"); 
  })();

  const btn = document.getElementById('sendBtn');

  btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = '#FF7F50';
    btn.style.color = '#fff';
  });

  btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = '#FFA3A2';
    btn.style.color = '';
  });

  btn.addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    btn.textContent = 'SENDING...';
    btn.disabled = true;

    // Отправляем письмо через EmailJS
    emailjs.send("service_ndacn8f", "template_jee37fw", {
      from_name: name,
      from_email: email,
      message: message,
    })
    .then(() => {
      btn.textContent = 'SENT!';
      btn.style.backgroundColor = '#049DD9';
      btn.style.color = '#fff';
    })
    .catch(() => {
      btn.textContent = 'ERROR';
      btn.style.backgroundColor = '#FF7F50';
      alert('There was a problem sending your message. Please try again later.');
    });
  });