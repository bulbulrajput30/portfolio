function calculate(operation) {

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let error = document.getElementById("error");
    let result = document.getElementById("result");

    error.textContent = "";

    // Check empty fields
    if (num1 === "" || num2 === "") {
        error.textContent = "Please enter both numbers.";
        result.textContent = "Result:";
        return;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    let answer;

    if (operation === "add") {
        answer = num1 + num2;
    }

    else if (operation === "subtract") {
        answer = num1 - num2;
    }

    else if (operation === "multiply") {
        answer = num1 * num2;
    }

    else if (operation === "divide") {

        if (num2 === 0) {
            error.textContent = "Cannot divide by zero.";
            result.textContent = "Result:";
            return;
        }

        answer = num1 / num2;
    }

    result.textContent = "Result: " + answer;
}