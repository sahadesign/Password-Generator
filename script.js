let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");

const char ='ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*abcdefghijklmnopqrstuvwxyz0123456789';
let isOutputDisplayed = false;

function generatePassword( length ) {
    let result = ' ';
    const charLength = char.length;
    for ( let i = 0; i < length; i++ ) {
        result += char.charAt(Math.floor(Math.random() * charLength));
    }

    return result;
}

if (isOutputDisplayed === false) {
    function displayOutput() {
        btn1.textContent = generatePassword(6);
        btn2.textContent = generatePassword(8);
        btn3.textContent = generatePassword(10);
        btn4.textContent = generatePassword(12);
        isOutputDisplayed = true;
    }
}
