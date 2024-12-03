let DisplayedNum = '';
let number1 = null;   
let number2 = null;    
let isSubmittingFirst = true;

function StoreValue(value) {
    DisplayedNum += value; 
    document.getElementById('output').textContent = `Current Number: ${DisplayedNum}`;
}

function Submit() {
    if (isSubmittingFirst) {
        if (DisplayedNum !== '') {
            number1 = parseFloat(DisplayedNum); 
            document.getElementById('Number1').textContent = `Number 1: ${number1}`;
            isSubmittingFirst = false;  // Switch to submitting the second number
        }
    } else {
        // Store number2 if DisplayedNum is not empty
        if (DisplayedNum !== '') {
            number2 = parseFloat(DisplayedNum);
            document.getElementById('Number2').textContent = `Number 2: ${number2}`;
            isSubmittingFirst = true;  // Ready to start with number1 again
        }
    }

    DisplayedNum = ''; 
    document.getElementById('output').textContent = 'Current Number: ';
}

function Clear() {
    DisplayedNum = ''; 
    number1 = null; 
    number2 = null; 
    document.getElementById('output').textContent = 'Current Number: ';
    document.getElementById('Number1').textContent = 'Number 1: ';
    document.getElementById('Number2').textContent = 'Number 2: ';
    document.getElementById('Result').textContent = 'Result: ';
}
function add() {
    if (number1 !== null && number2 !== null) {
        result = number1 + number2;
        document.getElementById('Result').textContent = `Result: ${number1} + ${number2} = ${result}`;
    }
}

function subtract() {
    if (number1 !== null && number2 !== null) {
        result = number1 - number2;
        document.getElementById('Result').textContent = `Result: ${number1} - ${number2} = ${result}`;
    }
}

function multiply() {
    if (number1 !== null && number2 !== null) {
        result = number1 * number2;
        document.getElementById('Result').textContent = `Result: ${number1} x ${number2} = ${result}`;
    }
}

function devide() {
    if (number1 !== null && number2 !== null) {
        result = number1 / number2;
        document.getElementById('Result').textContent = `Result: ${number1} / ${number2} = ${result}`;
    }
}