const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(`First Color: ${firstColor}`);
console.log(`Second Color: ${secondColor}`);
const outputDiv = document.getElementById('output');
outputDiv.innerHTML = `
    <h2>Colors</h2>
    <p><strong>First Color:</strong> ${firstColor}</p>
    <p><strong>Second Color:</strong> ${secondColor}</p>
`;
