// Object.values() – return own enumerable property’s values of an object as an array


// The Object.values() accepts an object and returns its own enumerable property’s values as an array


const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

const profile = Object.values(person);

console.log(profile);


// The Object.values() returns own enumerable properties while the for...in loop iterates properties in the prototype chain


// Technically, if you use the for...in loop with the Object.hasOwnProperty() method, you will get the same set of values as the Object.values()