// Spread
// used to split up array elements OR object properties
const newArray =[ ...oldArray, 1, 2]
const newObject = [...oldObject, newProp]


// Rest
// Used to merge a list of function arguments into an array
function sortArgs(...args) {
    return args.sort()
}
//Ex
const filter = (...args) =>{
    return args.filter(el => el === 1)
}
console.log(filter(1,2,3));


// Destructuring
// Easily extract array elements or object properties and store them in variables
const numbers = [1,2]
[num1, num2]=numbers;
console.log(num1);
console.log(num2);

var person = {
    name: 'Hung',
    age: 21,
};
({name, age} = person);
console.log(name);// Hung
console.log(age);// 21