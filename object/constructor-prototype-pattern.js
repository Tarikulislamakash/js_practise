// The combination of the constructor and prototype patterns is the most common way to define custom types in ES5. In this pattern

// The constructor pattern defines the object properties
// The prototype pattern defines the object methods


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function () {    
    return this.firstName + ' ' + this.lastName;
};

let p1 = new Person('John', 'Doe');
let p2 = new Person('Jane', 'Doe');

console.log(p1.getFullName());
console.log(p2.getFullName());


// ES6 introduces the class keyword that makes the constructor/prototype pattern easier to use. For example, the following uses the class keyword to define exactly the same Person type
class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getFullName() {
		return this.firstName + " " + this.lastName;
	}
}

let p1 = new Person('John', 'Doe');
let p2 = new Person('Jane', 'Doe');

console.log(p1.getFullName());
console.log(p2.getFullName());