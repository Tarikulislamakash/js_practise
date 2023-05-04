// Other language use classical inheritance
// JavaScript doesn’t use classical inheritance
// Instead, it uses prototypal inheritance


let person = {
    name: "John Doe",
    greet: function () {
        return "Hi, I'm " + this.name;
    }
};


// ES5 provided a standard way to work with prototypal inheritance by using the Object.create() method
let teacher = Object.create(person);
teacher.name = 'Jane Doe';
teacher.teach = function (subject) {
        return "I can teach " + subject;
}


// Note that now you should use the newer ES6 class and extends keywords to implement inheritance. It’s much simpler



// ES5 also introduced the Object.getPrototypeOf() method that returns the prototype of an object

console.log(Object.getPrototypeOf(teacher) === person);