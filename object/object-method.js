let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet() {
        console.log("This is method greeting.")
    },
    getFullName: function() {
        console.log("Hello ", this.firstName, this.lastName);
    }
};

person.getFullName();