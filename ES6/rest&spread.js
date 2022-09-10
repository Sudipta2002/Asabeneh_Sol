// overwriting by spread operator --> spreads the combined data passed in function
var students = {
    name: "Sudipta Ghosh ",
    age: "19",
    hobbies: ["gardening"]
}

// console.log(students);

var newStudent = {
    ...students,
    age: "20"
}
console.log(newStudent);

var names = ["adad", "adad", "fgfg"];

function nameIt(a, b, c) {
    console.log(a, b, c);
}
nameIt(...names); // combined value given


/* rest */ //-- > combines

function addNumbers(...other) {
    console.log(typeof(other)) //-- object
    console.log(other);
    return other[0] + other[1] + other[2] + other[3] + other[4];
}
const res = addNumbers(1, 2, 4, 3, 4); //--> separeted value given 
console.log(res);