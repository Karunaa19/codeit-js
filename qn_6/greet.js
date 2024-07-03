document.getElementById('greetingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const greeting = `Hello, ${firstName} ${lastName}!`;
    document.getElementById('greetingOutput').textContent = greeting;
});
