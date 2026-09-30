// Task 1: Normal Parameterized Function
function rectangleArea(length, width) {
    return length * width;
}

let area = rectangleArea(10, 5);

document.getElementById("area").textContent =
    "Rectangle Area = " + area;


// Task 1: Arrow Function
const checkVoter = (age) => {
    if (age > 18) {
        return "You are eligible to vote.";
    } else {
        return "You are not eligible to vote.";
    }
};

let age = 20;

document.getElementById("voter").textContent =
    checkVoter(age);


// Task 2: Display User's Name Dynamically
let name = prompt("Enter your name:");

document.getElementById("welcome").textContent =
    `Welcome, ${name}! 👋`;