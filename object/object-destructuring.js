let person = {
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'C.',
    currentAge: 28
};
let { firstName,  lastName, middleName = '', currentAge: age = 18 } = person;
console.log(middleName); // 'C.'
console.log(age); // 28



// Nested object destructuring
let employee = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
};
let{ name: { firstName, lastName } } = employee;



// It’s possible to do multiple assignement of a property to multiple variables
let employee = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
};
let {
    name: {
        firstName,
        lastName
    },
    name
} = employee;
console.log(firstName); // John
console.log(lastName); // Doe
console.log(name); // { firstName: 'John', lastName: 'Doe' }



// Destructuring function arguments
// Suppose you have a function that displays the person object:

let display = (person) => console.log(`${person.firstName} ${person.lastName}`);
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
display(person);

// It’s possible to destructure the object argument passed into the function like this:

let display = ({firstName, lastName}) => console.log(`${firstName} ${lastName}`);
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
display(person);