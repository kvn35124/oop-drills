// let person1 = {
//     name: 'Kyle',
//     sayHello: function() {
//         console.log(`Hello! My name is ${this.name}.`);
//     }
// }

// let person2 = {
//     name: 'Josh',
//     sayHello: function() {
//         console.log(`Hello! My name is ${this.name}.`);
//     }
// }

// let person3 = {
//     name: 'Brittany',
//     sayHello: function() {
//         console.log(`Hello! My name is ${this.name}.`);
//     }
// }

// let person4 = {
//     name: 'Drew',
//     sayHello: function() {
//         console.log(`Hello! My name is ${this.name}.`)
//     }
// }

// let person5 = {
//     name: 'Trent',
//     sayHello: function() {
//         console.log(`Hello! My name is ${this.name}.`)
//     }
// }

// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();

// class Person {
//     constructor(name, city, age) {
//         this.name = name;
//         this.city = city;
//         this.age = age;
//     }
//     string() {
//         console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}.`)
//     }
// }

// let p1 = new Person('Kevin', 'Birmingham', 27);
// let p2 = new Person('Ashely', 'Montevallo', 26);
// let p3 = new Person('Trent', 'Jemison', 26);
// let p4 = new Person('Drew', 'McCalla', 21);
// let p5 = new Person('Brittany', 'Bessemer', 25);

// p1.string();
// p2.string();
// p3.string();
// p4.string();
// p5.string();

class Vehicle {
    constructor(make, model, wheels) {
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    aboutVehicle() {
        console.log(`${this.make}, ${this.model}, ${this.wheels}`);
    }
}

class Truck extends Vehicle {
    constructor(make, model, wheels, doors, truckbed) {
        super(make, model, wheels);
        this.doors = doors;
        this.truckbed = truckbed;
    }
    truckString() {
        console.log(`I am a ${this.make} ${this.model} with ${this.wheels} wheels, ${this.doors} doors, and a ${this.truckbed}`);
    }
}

class Sedan extends Vehicle {
    constructor(make, model, wheels, size, mpg) {
        super(make, model, wheels);
        this.size = size;
        this.mpg = mpg;
    }
    sedanString() {
        console.log(`I am a ${this.make} ${this.model} with ${this.wheels} wheels. I am a ${this.size} vehicle and I get ${mpg} mpg.`);
    }
}


class Motorcycle extends Vehicle {
    constructor(make, model, wheels, handlebars, doors) {
        super(make, model, wheels);
        this.handlbars = handlebars;
        this.doors = doors;
    }
    motorcycleString() {
        console.log(`I am a ${this.make} ${this.model} with ${this.wheels} wheels. I have ${this.handbars} and ${this.doors} doors.`);
    }
}


let t1 = new Truck('Chevrolet', 'Silverado', 4, 4, 'truckbed');
let m1 = new Motorcycle('Kawasaki', 'Ninja', 2, 'handlebars', 'no');

t1.truckString();
m1.motorcycleString();





