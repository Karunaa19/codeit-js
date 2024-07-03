function invokeAfterDelay(callback) {
    setTimeout(() => {
        callback();
    }, 2000);
}


invokeAfterDelay(() => {
    console.log('HELLO HI TATA BYEE BYEE');
});
function invokeAfterDelay(callback) {
    setTimeout(() => {
        callback();
    }, 2000);
}

document.getElementById('click me!').addEventListener('click', () => {
    invokeAfterDelay(() => {
        document.getElementById('output').textContent = 'HELLO HI TATA BYEE BYEE';
    });
});
