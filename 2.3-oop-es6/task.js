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

         

        set state(state) {
            if (state < 0) {
                this._state = 0;
            } else if (state > 100) {
                this._state = 100;
            } else {
                this._state = state;
            }
        }

        get state() {
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
        for (let i in this.books) {
            if (this.books[i][type] === value) {
            return this.books[i];
            } else {
                return null;
            }
        }
    }

    giveBookByName(bookName) {
        for (let i in this.books) {
            if (this.books[i].name === bookName) {
                this.books.splice(i, 1);
            } else {
                return null;
            }
        }
    }
    
}
const library = new Library("Библиотека имени Ленина");
library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

//Задание №3

class StudentLog {
    constructor(name) {
        this.name = name;
    }

        getName () {
            return this.name;
        }

        addGrade(grade, subject) {
            let arrGrade = [];
            if (0 < grade <= 5) {
               let subjectGrade = {
                 grade: grade,
                 subject: subject
               }
            arrGrade.push(subjectGrade);
            return arrGrade.length;
            } else {
                return (`Вы пытались поставить оценку ${grade}! по предмету ${subject}. Допускаются только числа от 1 до 5.`)
            }

        }

        getAverageBySubject(subject) {
            
        }

    
}


const log = new StudentLog('Олег Никифоров');
console.log(log.getName())