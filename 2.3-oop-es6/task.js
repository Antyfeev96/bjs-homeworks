// Задание №1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

        fix() {
            this._state = this.state * 1.5;
            this.state = this._state;
        }

        setState = {

        set (state) {
            if (state < 0) {
                this.state = 0;
            } else if (state > 100) {
                this.state = 100;
            } else {
                this.state = state;
            }
          },

        get (state) {
            return state;
        }

        }
  
    }

    class Magazine extends PrintEditionItem {
        constructor(type) {
            super(name, releaseDate, pagesCount);
            type = magazine;
        }
    }

    class Book extends PrintEditionItem {
        constructor(type, author) {
            super(name, releaseDate, pagesCount);
            this.author = author;
            type = book;
        }
    }

    class NovelBook extends Book {
        constructor(type) {
            super(name, releaseDate, pagesCount, author);
            type = novel;
        }
    }

    class DetectiveBook extends Book {
        constructor(type) {
            super(name, releaseDate, pagesCount, author);
            type = novel;
        }
    }

    class FantasticBook extends Book {
        constructor(type) {
            super(name, releaseDate, pagesCount, author);
            type = novel;
        }
    }

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

// Задание №2

class Library {
    constructor(name) {
        this.name = name;
        books = [];
    }

    addBook(book) {
        _book = book;
        if (_book.state > 30) {
            books.push._book;
        }
    }

    
}
