// we can define constructor using constructor object.
// constructor is called when object is created.
class Student {

    // constructor
    constructor(name, id, grade) {
        this.name = name;
        this.id = id;
        this.grade = grade;
    }
    
    // behaviour
    study() {
        console.log(this.name, " Studying")
    }

    eat() {
        console.log(this.id, " eating");
    }

    sleep() {
        console.log(this.grade, " sleeping")
    }
}

// creating object.
const s1 = new Student("John", 2, 5.6);
console.log(s1.name);
console.log(s1.id);
console.log(s1.grade);
s1.study();
s1.eat();
s1.sleep()