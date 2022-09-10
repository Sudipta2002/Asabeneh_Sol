//level 1
let sentence = "Days of Javascript";

console.log(sentence.substr(0, 4));
console.log(sentence.substring(0, 4));
console.log(sentence.includes("of"));
console.log(sentence.split(" "));

let newSentence = sentence.replace("Javascript", "Python");
console.log(newSentence);
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
    // console.log(string.match('love'))

// level 2

let s = '10';
let n = 10;
console.log(s === n);
console.log(s == n);
if (typeof(s) != typeof(n)) {
    // console.log(false);
    // console.log(typeof(s));
    // console.log(typeof(n));

    s = parseInt(s);
}
if (typeof(s) == typeof(n)) {
    console.log(true);

}

// random number between 0 and 100;
let rand = Math.floor(Math.random() * 101);
console.log(rand);
// 5length uniquw e string
let x = "";
// while (x.length != 5) {
// let rand = Math.floor(Math.random() * 27);
// if (x.includes(String.fromCharacterCode(97 + rand))) {

// } else {
// x = x + String.fromCharacterCode(97 + rand);
// }

// }
// console.log(x);

let sentences = 'You cannot end a sentence with because because because is a conjunction'
    // console.log("sdd");
let word = 'because';
let b = sentences.lastIndexOf(word);
let a = sentences.indexOf(word);
let ans = sentences.substr(a, b - a + 1 + word.length);
console.log(ans);

// level 3
let sentence1 = "Love is the best thing in this world. Some found their love and some are still looking for their love";
let arr = sentence1.split(' ');
let cnt = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "Love" || arr[i] == 'love') cnt++;
}
console.log(cnt);

// counting by using match

let arr2 = (sentences.match(/because/g) || []).length;
console.log(arr2);

let sentence2 = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let arr3 = sentence2.match(/\d+/g);
console.log(typeof(arr3)); // object storing strings
console.log(arr3)
const n1 = parseInt(arr3[0] * 12)
const n2 = parseInt(arr3[1])
const n3 = parseInt(arr3[2] * 12)
const sum = n1 + n2 + n3;
console.log(sum);