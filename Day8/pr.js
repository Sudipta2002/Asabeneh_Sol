const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

var userkeys = Object.keys(users); // --> userkeys 
var maxskill = 0;
var ans = {};
var username;
// with max number of skills
userkeys.forEach(key => {
        if (users[key].skills.length > maxskill) {
            username = key;
            ans = users[key];
            maxskill = users[key].skills.length;
        }
    })
    // count of people with max skills

let count = 0;
userkeys.forEach(key => {
        if (users[key].points >= 50) {
            count = count + 1;
        }
    })
    // console.log(username)
    // console.log(ans)
console.log(count);
//with MERN stack profile

const MERN = ['MongoDB', 'Express', 'React', 'Node'];
let userMern = [];
userkeys.forEach(key => {
    let c = 0;
    let skill = users[key].skills;
    skill.forEach(e => {
        if (MERN.includes(e)) {
            c = c + 1;
        }
        if (c === MERN.length) {
            userMern.push(key);
        }
    })
});
console.log(userMern);