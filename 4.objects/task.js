

function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender,
    this.age = age
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark)
  } else {
    this.marks.push(mark)
  }
}

Student.prototype.addMarks = function () {
  if(this.marks === undefined) {
    this.marks = [];
    this.marks.push(...arguments)
  } else {
    this.marks.push(...arguments)
  }
}

Student.prototype.getAverage = function () {
  let sum = this.marks.reduce((a,b) => a+b);
  
  return sum / this.marks.length
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}

