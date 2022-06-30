class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    if (this.state < 100) {
      return (this.state = this.state * 1.5);
    } else {
      return (this.state = 100);
    }
  }

  set state(number) {
    if (number < 0) {
      this.state = 0;
    } else if (number > 100) {
      this.state = 100;
    } else {
      this._state = number;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
  }
  type = "magazine";
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
  }
  type = "book";
}

class NovelBook extends Book {
  type = "novel";
}

class FantasticBook extends Book {
  type = "fantastic";
}

class DetectiveBook extends Book {
  type = "detective";
}

class Library {
  constructor(name, books) {
    this.name = name.toString();
    this.books = [];
  }

  addBook(book, magazine) {
    if (this.state > 30) {
      this.books.push(this.book);
    }
  }

  findBookBy(type, value) {
    if (books.find((book) => book.type === "") === true) {
      return this.book;
    } else {
      return null;
    }
  }

  giveBookByName(bookName) {
    this.books.slice();
  }
}
