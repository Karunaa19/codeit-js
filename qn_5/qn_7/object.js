const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};
const { name, age, city } = person;
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`City: ${city}`);
const outputDiv = document.getElementById('output');
outputDiv.innerHTML = `
    <h2>Person Details</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>City:</strong> ${city}</p>
`;
