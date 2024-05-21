document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const idea = document.getElementById('idea').value;

    const data = new FormData();
    data.append('email', email);
    data.append('idea', idea);
    data.append('sheetName', 'SimpleChain');

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzUnCt-XonKsqeYtquXUtLduIdKkmxm01ZBKwuh9K2KyJ6MH-96rTpFC4kMy5jEVvaI/exec',
        {
          method: 'POST',
          body: data,
        },
      );
        const json = await response.json();
        console.log('Success:', JSON.stringify(json));
    } catch (error) {
        console.error('Error:', error);
    }

    alert('Thank you for your submission!');
});
