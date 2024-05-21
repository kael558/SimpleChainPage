document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const idea = document.getElementById('idea').value;
    console.log('Email:', email, 'Idea:', idea);
    alert('Thank you for your submission!');
});
