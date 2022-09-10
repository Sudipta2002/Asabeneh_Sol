// Callbacks

const datas = [{
    name: "Sudipta",
    Profession: "SDE",
}, {
    name: "Aryan",
    Profession: "SDE",
}];

function getDatas() {
    setTimeout(() => {
        let output = "";
        datas.forEach((data, index) => {
            output += `<li>${data.name}</li>`
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createData(newData) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            datas.push(newData);
            let error = false;
            if (!error) {
                resolve();
            } else {
                reject("sdfsfsdfsdfsfsfs");
            }
        }, 5000);
    })
}
// getDatas();
// createData({
//     name: "Sayan",
//     Profession: "SDE",
// });

// lets use async await

async function start() {
    await createData({
        name: "Sayan",
        Profession: "SDE"
    })
    getDatas();
}
start();