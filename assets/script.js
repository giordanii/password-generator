let length = document.querySelector('input#pass_length');
let res = document.getElementById('res');
let chars = "0123456789abcdefghijklmnopqrstuvwxyz.'!@#$%^&*()\"{}ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let password = '';
var copyText = document.getElementById("password");

function checkLength() {
    if (length.value.length == '') {
        window.alert('You must specify how many characters you desire.')
    } else {
        length = length.value
    }
}

function generate() {
    checkLength();
    res.innerHTML = '' 
    
    for (let c = 0; c < length; c++) {
    let randomic = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomic, randomic + 1);
    }
    document.getElementById("password").value = password;
}

function copy() {
    copyText.select();
    document.execCommand("copy");
}