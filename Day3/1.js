var today = new Date();
var day = today.getDate();
var month = (today.getMonth() + 1) + "";
var year = today.getFullYear() + "";
var hour = today.getHours() + "";
var minutes = today.getMinutes() + "";
var seconds = today.getSeconds() + ""; // numbers are converted to string
console.log(typeof(seconds));
// console.log(today.getMonth());
day = checkZero(day);
month = checkZero(month);
year = checkZero(year);
hour = checkZero(hour);
minutes = checkZero(minutes);
seconds = checkZero(seconds);

console.log(year + "-" + month + "-" + day + " " + hour + ":" + minutes);

function checkZero(data) {
    if (data.length == 1) {
        data = "0" + data;
    }
    return data;
}