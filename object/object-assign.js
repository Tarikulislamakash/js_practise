// Object.assign() – copy an object or merge objects

Object.assign(target, ...sources)

let widget = {
    color: 'red'
};
let clonedWidget = Object.assign({}, widget);
console.log(clonedWidget);

// Note that the Object.assign() only carries a shallow clone, not a deep clone.



// Using JavaScript Object.assign() to merge objects

let box = {
    height: 10,
    width: 20
};
let style = {
    color: 'Red',
    borderStyle: 'solid'
};
let styleBox = Object.assign({}, box, style);
console.log(styleBox);
