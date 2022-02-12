function getPinNmber() {
    const pin = Math.round(Math.random() * 10000);
    if ((pin + '').length > 3) {
        return pin;
    } else {
        return getPinNmber();
    }
}

function pinGenarate() {
    const pin = getPinNmber();
    document.getElementById('display-pin').value = pin;
}

// document.getElementById('key-pad').addEventListener('click', function (event) {
//     const inputNumber = event.target.innerText;
//     console.log(inputNumber)
// })

const buttons = document.getElementsByClassName('button');
for (let button of buttons) {
    button.addEventListener('click', function (event) {
        const numbers = event.target.innerText;
        const getNumbers = document.getElementById('pin-input');
        if (isNaN(numbers)) {
            if (numbers == 'C') {
                getNumbers.value = '';
            }
        } else {
            getNumbers.value += numbers; // getNumbers.value = getNumbers.value + numbers
        }
    })
}

function pinVarify() {
    const pin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('pin-input').value;
    const errorMsg = document.getElementById('error-msg');
    const successMsg = document.getElementById('success-msg');
    if (pin == typedPin) {
        successMsg.style.display = 'block';
        errorMsg.style.display = 'none';
    } else {
        successMsg.style.display = 'none';
        errorMsg.style.display = 'block';
    }
}