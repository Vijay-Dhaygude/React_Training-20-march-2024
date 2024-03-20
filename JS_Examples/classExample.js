class Person {
  constructor(name1) {
    this.name = name1;
  }
  greet() {
    console.log("Hello I am " + this.name);
  }
}

const p1 = new Person("Ram");
p1.greet();

class Student extends Person {
  constructor(name1, level1) {
    super(name1);
    this.level = level1;
  }
  display() {
    console.log(`Hello, I am ${this.name} from ${this.level}`);
  }
}

const s1 = new Student("Raj", "10th Std");
s1.display();
