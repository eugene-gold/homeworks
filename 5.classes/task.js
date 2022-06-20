class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    } 
    fix() {
        if (this.state * 1.5 >= 100)  {
            return this.state = 100;
        }
        else return this.state = this.state * 1.5;
        
    }
    set setState (state) {
        if (state < 0) this.state = 0;
        else if (state > 100) this.state = 100;
        else this._state = state;
    }
    get setState () {
        return this._setState
    }
}

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  );

  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state = 100);
        this.type = 'magazine';
    }
  }

  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100, type) {
        super(name, releaseDate, pagesCount, state = 100, type);
        this.author = author;
        this.type = 'book';
    }
  }

  class NovelBook extends Book {
    constructor(author) {
        super(author);
        this.type = 'novel';
    }
  }

  class FantasticBook extends Book {
    constructor(author) {
        super(author);
        this.type = 'fantastic';
    }
  }
  class DetectiveBook extends Book {
    constructor(author) {
        super(author);
        this.type = 'detective';
        }
    }
   

    class Library {
        constructor(name, books) {
            this.name = '';
            this.books = [];      
        }
        addBook(book) {
            if (book instanceof PrintEditionItem && book.state > 30)  {
                return this.books.push(book);
            }
        }
        findBookBy(type, value) {
            
        }
    }