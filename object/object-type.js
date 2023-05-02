// object created by object literal syntax
let person = {
    firstName: 'John',
    lastName: 'Doe'
};





// object created by constructor function

// the name of a constructor function starts with a capital letter like Person, Document

// a constructor function should be called only with the new operator

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let person = new Person('John','Doe');