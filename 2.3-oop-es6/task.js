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
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
            return this.books[i];
            } 
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i ++) {
            if (this.books[i].name === bookName) {
                return this.books.splice(i, 1)[0];
            }
        }
        return null;
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
        this.marks = [];
        this.averageSubject = [];
    }

        getName () {
            return this.name;
        }

        addGrade(grade, subject) {
            for (let i = 0; i < this.marks.length; i++) {
                if (this.marks[i] === subject || grade > 0 || grade <= 5) {
                    this.marks.push(subject);
                    this.marks.subject.push(grade);
                }
                  else if (grade > 0 || grade <=5) {
                      this.marks[i] = subject;
                      this.marks[i].push(grade);
                  }
                }
            }

        getAverageBySubject(subject) {
            let sum = 0;

            for (let i = 0; i < this.marks.subject.length; i++) {
                if (this.marks[i] === subject) {
                sum += this.marks.subject[i];
                } else {
                    return 0;
                }
            }

            average = sum / this.marks.subject.length;
            this.averageSubject.push(average);
        }

        getTotalAverage() {
            if (this.averageSubject.length === 0) {
                return 0;
            } else {
            for (let i = 0; i < this.averageSubject.length; i++) {
                finalSum += this.averageSubject[i];
            }
            let finalAverage = finalSum / this.averageSubject.length;
            return finalAverage;
        }
        }
}


const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0
