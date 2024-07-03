
function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>${greeting}, ${name}!</p>`;
}

greet("John"); 
greet("Jane", "Hi");