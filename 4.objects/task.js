function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  // Ваш код
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;

  //ваш код
};

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [...marks];
  } else {
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
  return this.marks.reduce((prev, item) => prev + item) / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
};

let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
student1.addMark(4);
student1.addMarks(4, 5, 3);
console.log(student1.getAverage());
console.log(student1);

let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude("low grades");
console.log(student2);
