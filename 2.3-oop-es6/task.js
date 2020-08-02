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
            this.state *= 1.5;
            if (this.state > 100) {
                this.state = 100;
            }
        }

         

        set giveMeState(state) {
            if (state < 0) {
                this._state = 0;
            } else if (state > 100) {
                this._state = 100;
            } else {
                this._state = state;
            }
        }

        get giveMeState() {
            return this._state;
        }
}

    class Magazine extends PrintEditionItem {
        constructor(name, releaseDate, pagesCount,) {
            super(name, releaseDate, pagesCount);
            this.name = name;
            this.releaseDate = releaseDate;
            this.pagesCount = pagesCount;
            this.type = "magazine";
        }
    }

    class Book extends PrintEditionItem {
        constructor(author, name, releaseDate, pagesCount) {
            super(name, releaseDate, pagesCount);
            this.name = name;
            this.releaseDate = releaseDate;
            this.pagesCount = pagesCount;
            this.author = author;
            this.type = "book";
        }
    }

    class NovelBook extends Book {
        constructor(author, name, releaseDate, pagesCount) {
            super(author, name, releaseDate, pagesCount);
            this.type = "novel";
        }
    }

    class DetectiveBook extends Book {
        constructor(author, name, releaseDate, pagesCount) {
            super(author, name, releaseDate, pagesCount);
            this.type = "detective";
        }
    }

    class FantasticBook extends Book {
        constructor(author, name, releaseDate, pagesCount) {
            super(author, name, releaseDate, pagesCount);
            this.type = "fantastic";
        }
    }

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

// Задание №2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        if (type === "type" && value === this.addBook.type) {
            return book.name;
        } else if (type === "author" && value === this.addBook.author) {
            return book.name;
        } else if (type === "name" && value === this.addBook.name) {
            return book.name;
        } else if (type === "releaseDate" && value === this.addBook.releaseDate) {
            return book.name;
        } else if (type === "pagesCount" && value === this.addBook.pagesCount) {
            return book.name;
        }
    }
    
}
const library = new Library("Библиотека имени Ленина");
library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));