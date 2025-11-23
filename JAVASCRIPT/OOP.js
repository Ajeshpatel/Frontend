// basic things in oop.
// Using object
const student = {
    name : "Anu",
    id : 23,
    grade: 3.4,
    study: function() {
        console.log(student.name, "Studying");
    },
    eat: function() {
        console.log(student.name, "Eating");
    },
    sleep: function() {
        console.log(student.name, "Sleeping");
    }

}

console.log(student);
student.study();
student.eat();
student.sleep();

console.log("----------------------------");

// Using class.
class Student {

    // properties
    name;
    id;
    grade;

    // behaviour
    study() {
        console.log("Studying")
    }

    eat() {
        console.log("eating");
    }

    sleep() {
        console.log("sleeping")
    }
}

// creating object.
const s1 = new Student();
console.log(s1.name = "John");
console.log(s1.id = 2);
console.log(s1.grade = 5.6);
s1.study();
s1.eat();
s1.sleep();

