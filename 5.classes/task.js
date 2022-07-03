//1
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
    set state (newState) {
        if (newState < 0) this.state = 0;
        else if (newState > 100) this.state = 100;
        else this._state = newState;
    }

    get state () {
        return this._state
    }

}

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
     constructor(author, name, releaseDate, pagesCount, state = 100, type) {
        super(author, name, releaseDate, pagesCount, state = 100, type);
        this.type = 'novel';
    }
  }

  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type) {
        super(author, name, releaseDate, pagesCount, state = 100, type);
        this.type = 'fantastic';
    }
  }
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type) {
        super(author, name, releaseDate, pagesCount, state = 100, type);
        this.type = 'detective';
        }
    }
   
//2
    class Library {
        constructor(name = '') {
            this.name = name;
            this.books = [];
        }
        addBook(book) {

            if ( book.state > 30)  {
                return this.books.push(book);
            }

        }
        findBookBy(type, value) {

            const result = this.books.find(item => item[type] === value)
            if (result === undefined) return null
            return result

        }
        giveBookByName(bookName) {
            let giveBook = this.books.findIndex( (book, index) => book.name === bookName)
            console.log('1',this.books)
            console.log('2',giveBook)

            if ((giveBook !== -1)) {
               return this.books.splice(giveBook, 1)[0]
            }
            return null
        }
    }

const library = new Library("Библиотека имени Ленина");


library.addBook(
    new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
    )
);



library.addBook(
    new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
    )
);


library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));

library.addBook(new Magazine("Мурзилка", 1924, 60));


console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

//3



class Student {
    constructor(name, gender, age){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.subjects = [];
   }

    addMark (mark, subj = '') {
         if (parseInt(mark) < 1 || parseInt(mark) > 5) {
             return console.log('Ошибка: оценка это число от 1 до 5.')
         } else if (!(parseInt(mark))) {
             return console.log('Ошибка: оценка должна быть числом от 1 до 5.')
         } else if ( subj.length === 0) {
             return console.log('Ошибка: предмет не введен.')
         }
        this.subjects.push({[subj]:mark})
    }

    getAverageBySubject(subject) {
       const subjMarksArray = this.subjects.filter((item =>  item[subject]))
       const sum =  this.subjects.reduce((a, b) => a + (b[subject] || 0), 0);
       return sum / subjMarksArray.length
    }

    getAverage() {
        let sum = this.subjects.reduce((a, b) => a + (Number(Object.values(b)) || 0), 0)
        return sum / this.subjects.length
    }

    exclude (reason) {
        delete this.subjects;
        this.excluded = reason;
    }

}

let patriarch = new Student('Kirill', 'male', 60)
patriarch.addMark(5, 'chemistry')
patriarch.addMark(5, 'algebra')
patriarch.addMark(5, 'geometry')
patriarch.addMark(3, 'geometry')
patriarch.addMark(3)
console.log(patriarch)
console.log(patriarch. getAverageBySubject('geometry'))
console.log(patriarch.getAverage())
patriarch.exclude("Исключен за попытку подделать оценки")
console.log(patriarch)