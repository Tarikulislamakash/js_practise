// A factory function is a function that returns a new object.
// Use Object.create() to create an object using an existing object as a prototype.


var personActions = {
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    },
};

function createPerson(firstName, lastName) {
    let person = Object.create(personActions);
    person.firstName = firstName;
    person.lastName = lastName;
    return person;
}


let person1 = createPerson('John', 'Doe');
let person2 = createPerson('Jane', 'Dane');

console.log(person1.getFullName());
console.log(person2.getFullName());
