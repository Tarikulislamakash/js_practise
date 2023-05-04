// 1) Simple function invocation
// In the non-strict mode, the this references the global object when the function is called as follows

function show() {
    console.log(this === window); // true
}
show();


// In the strict mode, JavaScript sets the this inside a function to undefined. For example
"use strict";
function show() {
    console.log(this === undefined);
}
show();



// ES2020 introduced the globalThis object that provides a standard way to access the global object across environments.

// Historically, JavaScript had a global object with different names in different environments.

// In web browsers, the global object is window or frames.

// However, the Web Workers API doesn’t have the window object because it has no browsing context. Hence, the Web Workers API uses self as a global object.

// Node.js, on the other hand, uses the global keyword to reference the global object.

// Environment	Global
// Web Browsers => this
// Web Workers => self
// Node.js => global