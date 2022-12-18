let length = document.querySelector('input#pass_length');
let res = document.getElementById('res');
let charsAll = "0123456789abcdefghijklmnopqrstuvwxyz.'!@#$%^&*()\"{}ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charsNonSpecial = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let password = '';
let check = document.querySelector('input[name="special"]:checked');

function checkLength() {
    if (length.value.length == '') {
        window.alert('You must specify how many characters you desire.')
    } else {
        length = length.value
        res.innerHTML = `The password length is ${length}.`
    }
}

function checkSpecial() {
    if (document.querySelectorAll('input[type="radio"]:checked').length === 0) {
        window.alert("Not checked");
    }
}

function generate() {
    checkLength();
    checkSpecial();
    res.innerHTML = '' 
    
    for (let c = 0; c < length; c++) {
    let randomic = Math.floor(Math.random() * charsAll.length);
    password += charsAll.substring(randomic, randomic + 1);
    }
    res.innerHTML += `The generated password is ${password}`
    console.log(check)
}
        