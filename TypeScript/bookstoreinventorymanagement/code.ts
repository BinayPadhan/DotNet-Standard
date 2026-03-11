// DO NOT MODIFY THE FUNCTION NAMES OR VARIABLE NAMES.
 
 
// Declare the variables as given in the description and export it
 
 
//  Write the functions and their implementation as defined in the description and export it
 
 
 
// Uncomment the following lines to check the output
 
// addBook({ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 15.99 });
// addBook({ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 10.99 });
// addBook({ id: 3, title: '1984', author: 'George Orwell', price: 12.50});
// addBook({ id: 4, title: 'Brave New World', author: 'Aldous Huxley', price: 14.99 });
// console.log('Books after adding:', books);
 
// removeBookById(2);
// console.log('Books after removing:', books);
 
// updateBookPrice(3, 13.99);
// console.log('Books after updating price:', books);
 
// const searchResult = searchBooksByAuthor('Fitzgerald');
// console.log('Search result:', searchResult);
 
// Comment the above testing statements before evaluating your code
 
 
// 1. Book type declaration
export type Book = {
    id: number;
    title: string;
    author: string;
    price: number;
};
 
// 2. Variable declaration: Create an empty array to hold Book objects
export let books: Book[] = [];
 
/**
* Adds a new book to the books array.
*/
export function addBook(newBook: Book): void {
    books.push(newBook);
}
 
/**
* Removes a book from the books array based on its 'id'.
*/
export function removeBookById(id: number): void {
    books = books.filter(book => book.id !== id);
}
 
/**
* Updates the price of a book based on its 'id'.
*/
export function updateBookPrice(id: number, newPrice: number): void {
    const book = books.find(b => b.id === id);
    if (book) {
        book.price = newPrice;
    }
}
 
/**
* Searches for books by a specific author. 
* Uses .includes() to handle partial matches like 'Fitzgerald' in 'F. Scott Fitzgerald'.
*/
export function searchBooksByAuthor(author: string): Book[] {
    return books.filter(book => book.author.includes(author));
}