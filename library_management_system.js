// *** LIBRARY MANAGEMENT SYSTEM ***

/*
  - the lib object contains an array of books
  - each books represented by an object with properties such as title, author, genre, and availability 
  - the program includes the following methods:
	- displayBooks: Display all books in the library.
	- isBookAvailable(title): Check if a specific book is available.
	- borrowBook(title): Mark a book as borrowed (unavailable).
	- returnBook(title): Mark a borrowed book as returned (available).
	- displayBooksByGenre(genre): Display books of a specific genre.
*/


// Object that contains the library management system properties and methods
const lib = {

  // List to contains the books objects
  books:[],

  // Method to create the books records
  addBook(newAuthor, newTitle, newGenre, newQuantity){
    if(newAuthor && newTitle){
      const newBook = {
        author: newAuthor,
        title: newTitle,
        genre: newGenre,
        aveliable: newQuantity,
      }
      this.books.push(newBook);
      console.log(newTitle + ' has been added to the library system.');
    }else{
      console.log('Invalid input!');
    }
  },

  // Method for borrowing books from the library
  addBorrow(title){
 
    // Check the input book title is exist in the library system and also aveliable
    const validation = this.books.find((element) => element.title === title);
    if(validation){
      if(validation.aveliable){
        validation.aveliable -= 1;

    // Check the input book title has been already borrowed at least one time
    // If it has been add plus one to the borrowed property, otherwise create the borrowed property for that book
        validation.borrowed ? validation.borrowed += 1 : validation.borrowed = 1;
        console.log(title + ' has been borrowed from the library.');
      }else{
        console.log('This book is not aveliable!');
      }
    }else{
      console.log('This title is not exist in the library system!');
    }
  },

  // Method for receiving a book to the library
  receiveBook(title){
    const validation = this.books.find((element) => element.title === title);
    if (validation){
      if(validation.borrowed){
        validation.aveliable += 1;
        if(validation.borrowed > 1){
          validation.borrowed -= 1;
        }else{
          delete validation.borrowed;
        }
      }else{
        console.log('There is no borrowed book with this title!');
      }
    }else{
      console.log('This title is not exist in the library system!');
    }
  }

};


// testing the program's functionalities
lib.addBook('Tim Lee','Wonderland','horror', 12);
lib.addBook('Natasha Siegfried','Sky', 'crimi', 5);
lib.addBook('Tom Kinet','Liberty', 'historical', 8);
lib.addBook('Alan Rickmann','Satisfy', 'poetry', 4);

lib.addBorrow('Satisfy');
lib.addBorrow('Satisfy');
lib.addBorrow('Satisfy');
lib.addBorrow('Satisfy');
lib.addBorrow('Satisfy');

lib.receiveBook('Satisfy');
lib.receiveBook('Satisfy');
lib.receiveBook('Satisfy');

