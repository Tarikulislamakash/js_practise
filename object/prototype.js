// In JavaScript, objects can inherit features from one another via prototypes. Every object has its own property called prototype.

// Because a prototype itself is also another object, the prototype has its own prototype. This creates a something called prototype chain. The prototype chain ends when a prototype has null for its own prototype.


let person = {'name' : 'John'}

typeof(Object)

Output: 'function'


// Please note that Object() is a function, not an object. It’s confusing if this is the first time you’ve learned about the JavaScript prototype.


function Person(name) {
    this.name = name;
}
let p1 = new Person('John');

console.log(Person);
console.log(Person.prototype);
console.log(Person.prototype.constructor);

p1.constructor.prototype


// The p1.constructor returns Person, therefore, p1.constructor.prototype returns the prototype object.