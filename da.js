function calculate() {
    var num1Input = document.getElementById("num1");
    var num2Input = document.getElementById("num2");
    var operationSelect = document.getElementById("operation");
    var resultDisplay = document.getElementById("result");

    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var operation = operationSelect.value;

    var result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Error: Cannot divide by zero");
                return;
            } else {
                result = num1 / num2;
            }
            break;
        default:
            alert("Error: Invalid operation");
            return;
    }

    resultDisplay.textContent = "Result: " + result;
}
