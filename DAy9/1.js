let myArray = [1, 2, 3, 4];

const returnValue = myArray.map((element) => {
    return element * element;
}).reverse();
console.log(returnValue); // new array
console.log(myArray); // original


// in forEach no new array is formed because nothing is returned in it

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
countries.forEach((e) => {
    console.log(e);
})
const newCountries = countries.map((e) => {
    return e.toUpperCase();
})
console.log(newCountries);
const newCountriesL = countries.map((e) => {
    return e.length * e.length;
})
console.log(newCountriesL);

const land = countries.filter((e) => {
    // if (e.includes('land') == false) return e;
    // return e.includes('land');
    // return e.length === 6;
    // return e.startsWith('S')
    return e.price >= 1
})
console.log(land);
const price = products.filter((e) => {
    // if (e.includes('land') == false) return e;
    // return e.includes('land');
    // return e.length === 6;
    // return e.startsWith('S')
    return e.price >= 1
})
console.log(price);

const arr = [1, 2, 3, 4, 5];
const num = arr.reduce((acc, curr) => acc + curr, 0)
console.log(num);

const sen = countries.reduce((acc, curr) => acc + ',' + curr);
console.log(sen);

let summ = products.map((e) => {
    return e.price;
}).filter((e) => {
    return e > 1;
}).reduce((acc, curr) => acc + curr, 0);

console.log(summ);

let prices = products.reduce((acc, curr) => {
    return curr.price >= 1 ? acc + curr.price : acc + 0
}, 0);
console.log(prices);