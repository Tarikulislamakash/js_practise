// JavaScript objects have two types of properties: data properties and accessor properties.

// JavaScript uses internal attributes denoted by [[...]] to describe the characteristics of properties such as [[Configurable]], [[Enumerable]], [[Writable]], and  [[Value]], [[Get]], and [[Set]].

// The method Object.getOwnPropertyDescriptor() return a property descriptor of a property in an object.

// A property can be defined directly on an object or indirectly via the Object.defineProperty() or Object.defineProperties() methods. These methods can be used to change the attributes of a property.





let person = {};
Object.defineProperty(person, 'ssn', {
    configurable: false,
    value: '012-38-9119'
});
Object.defineProperty(person, 'ssn', {
    configurable: true
});





let person = {
    firstName: 'John',
    lastName: 'Doe'
}
Object.defineProperty(person, 'fullName', {
    get: function () {
        return this.firstName + ' ' + this.lastName;
    },
    set: function (value) {
        let parts = value.split(' ');
        if (parts.length == 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        } else {
            throw 'Invalid name format';
        }
    }
});
console.log(person.fullName);





var product = {};
Object.defineProperties(product, {
    name: {
        value: 'Smartphone'
    },
    price: {
        value: 799
    },
    tax: {
        value: 0.1
    },
    netPrice: {
        get: function () {
            return this.price * (1 + this.tax);
        }
    }
});
console.log('The net price of a ' + product.name + ' is ' + product.netPrice.toFixed(2) + ' USD');





let person = {
    firstName: 'John',
    lastName: 'Doe'
};
let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);
output:
{
value: 'John',
writable: true,
enumerable: true,
configurable: true
}