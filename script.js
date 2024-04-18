let calculateValue = '';

function number(value) {
    calculateValue += value;
    document.getElementById('display').value = calculateValue;
}

function clearDisplay() {
    calculateValue = '';
    document.getElementById('display').value = calculateValue;
}

function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;

    let result;
    if (expression.includes('+')) {
        const numbers = expression.split('+');
        result = parseFloat(numbers[0]) + parseFloat(numbers[1]);
    } else if (expression.includes('-')) {
        const numbers = expression.split('-');
        result = parseFloat(numbers[0]) - parseFloat(numbers[1]);
    } else if (expression.includes('*')) {
        const numbers = expression.split('*');
        result = parseFloat(numbers[0]) * parseFloat(numbers[1]);
    } else if (expression.includes('/')) {
        const numbers = expression.split('/');
        result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
    }

    calculateValue = result.toString();
    display.value = calculateValue;
}