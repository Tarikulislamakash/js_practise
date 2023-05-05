// Object.entries() – return own enumerable string-keyed property [key, value] pairs of an object


// ES2017 introduces the Object.entries() method that accepts an object and returns its own enumerable string-keyed property [key, value] pairs of the object

const ssn = Symbol('ssn');
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    [ssn]: '123-345-789'
};
const kv = Object.entries(person);
console.log(kv);

// output:
[
    ['firstName', 'John'],
    ['lastName', 'Doe'],
    ['age', 25]
]


// The firstName, lastName, and age are own enumerable string-keyed property of the person object, therefore, they are included in the result.
// The ssn is not a string-key property of the person object, so it is not included in the result.