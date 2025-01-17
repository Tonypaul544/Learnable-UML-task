

class bookShop {
  // Attributes:
  static totalBooks = 50;
  static availableBooks = 20;

  // Constructor for bookShop
  constructor(bookNumber, bookName) {
    this.bookNumber = "B001"; // The book number
    this.bookName = "book1"; // The book name
  }  
  // console.log(bookShop);

  // Static method for selling a Book
  static sellBook {
    if (bookShop.availableBooks > 0) {
      bookShop.availableBooks--;
      console.log("book sold successfully");
    } else {
      console.log("All books sold out already!, please, refill the bookshop");
    }
  }

  // Static method for refilling bookshop
  static bookShopRefill() {
    bookShop.availableBooks + 50;
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
    this.buyerId = "Pa544ul"; // Unique ID for the buyer
    this.name = "Paul Nwodo"; // buyer name
    buyer.totalbuyers++; // Increment total buyers
  }

  // Method for buying a book
  sellBookAlert {
    console.log(`${this.name} has bought a book`);
    bookShop.sellBook();
  }
}
console.log(bookShop);
console.log(buyer);



