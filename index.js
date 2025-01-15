

class bookShop {
  // Attributes:
  static totalBooks = 50;
  static availableBooks = 20;

  // Constructor for bookShop
  constructor(bookNumber, bookName) {
    this.bookNumber = bookNumber; // The book number
    this.bookName = bookName; // The book name
  }  
  // console.log(bookShop);

  // Static method for selling a Book
  static bookSold() {
    if (bookShop.availableBooks > 0) {
      bookShop.availableBooks--;
      console.log("book sold successfully");
    } else {
      console.log("All books sold out already!!");
    }
  }

  // Static method for refilling bookshop
  static bookShoprefill() {
    bookShop.availableBooks++;
    console.log("bookshop Refilled Successfully");
  }
}
// console.log(bookShop);

// Define the buyer class
class buyer {
  // Attributes
  static totalbuyers = 5;

  // Constructor for buying
  constructor(buyerId, name) {
    this.buyerId = buyerId; // Unique ID for the buyer
    this.name = name; // buyer name
    buyer.totalbuyers++; // Increment total buyers
  }

  // Method for buying a book
  buyBook() {
    console.log(`${this.name} is has bought a book`);
    bookShop.buyBook();
  }
}
console.log(bookShop);
console.log(buyer);



