const books = [
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', readingStatus: true },
    { title: '1984', author: 'George Orwell', readingStatus: false },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', readingStatus: true },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', readingStatus: false },
];
function displayReadingStatus(books) {
    const bookList = document.getElementById('bookList');
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.textContent = `Title: ${book.title},   Author: ${book.author},    Reading Status: ${book.readingStatus ? 'Read' : 'Not Read'}`;
        bookList.appendChild(bookItem);
    });
}
displayReadingStatus(books);
