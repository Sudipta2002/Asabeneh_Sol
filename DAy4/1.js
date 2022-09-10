const countries = [
    'Albania',
    'Bolivia',
    'Japan',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Kenya'
]

// countries.sort();
console.log(countries.slice(-3));

// delete from back -- > pop

countries.pop();
console.log(countries);

// delete from front --> shift
countries.shift();
console.log(countries);
// delete Finland;
let index = countries.indexOf("Finland");
countries.splice(index, 1);
console.log(countries);
countries.reverse();
console.log(countries);

let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let arr = text.split(' ');
console.log(arr.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (shoppingCart.includes('Meat') == false) {
    shoppingCart.push('Meat');
}
shoppingCart.reverse();
if (shoppingCart.includes('Sugar') == false) {
    shoppingCart.push('Sugar');
}
shoppingCart.reverse();
let index1 = shoppingCart.indexOf('Tea');
shoppingCart[index1] = "Green Tea";
console.log(shoppingCart);

if (countries.includes('Ethiopia')) {
    let e = "Ethiopia";
    console.log(e.toUpperCase());
}
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd);

console.log(fullStack)