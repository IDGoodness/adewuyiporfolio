function sendMail() {
  const params = {
    from_name: document.getElementById('name').value,
    email_id: document.getElementById('email').value,
    message: document.getElementById('message').value
  };
  emailjs.send('service_8g4i7pj', 'template_t4m2l8u', params)
    .then(function(res) {
      alert("Success!")
      console.log('SUCCESS!', res.status, res.text);
    }, function(error) {
      console.log('FAILED...', error);
      alert("Failed....!")
    });
}

// Ensure EmailJS is initialized
document.addEventListener("DOMContentLoaded", function() {
  emailjs.init("YC1scBQUcW0aPNV-M");
});