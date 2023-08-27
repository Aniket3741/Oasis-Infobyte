let currentExpression = '';

function appendNumber(number) {
    currentExpression += number;
    updateDisplay();
}

function appendOperator(operator) {
    currentExpression += ` ${operator} `;
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentExpression);
        currentExpression = result.toString();
        updateDisplay();
    } catch (error) {
        currentExpression = '';
        updateDisplay();
    }
}

function clearDisplay() {
    currentExpression = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentExpression;
}
