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
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else this._state = state;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
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

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}


class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] == value) || null;
    }


    giveBookByName(bookName) {
        const book = this.findBookBy('name', bookName);
        if (book) {
            this.books.splice(this.books.indexOf(book), 1);
        }
        return book;
    }
}

// Задание 3


class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = new Object(marks);
    }

    addMark(score, subject) {
        if (score < 2 || score > 5) {
            console.log(`Значение ${score} некорректно!`);
            return;
        } else {
            if (this.marks.hasOwnProperty(subject)) {
                this.marks[subject].push(score);
            } else {
                this.marks[subject] = new Array();
                this.marks[subject].push(score);
            }
        }
        return this.marks;
    }

    getAverageBySubject(subject) {
        if (!this.marks.hasOwnProperty(subject)) {
            return 0;
        } else {
            return this.marks[subject].reduce((acc, item) => acc + item) / this.marks[subject].length;
        }
    }

    getAverage() {
        let sum = 0;
        let subjects = Object.keys(this.marks);
        if (subjects.length === 0 || Object.keys(this.marks) == undefined) {
            return 0;
        } else {
            for (let i = 0; i < subjects.length; i++) {
                this.getAverageBySubject(subjects[i]);
                sum = sum + this.getAverageBySubject(subjects[i]);
            }
            return sum / subjects.length;
        }
    }
}