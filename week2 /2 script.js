// ================================
// DAY 2 - JAVASCRIPT FUNCTIONS
// ================================

const output = document.getElementById("output");


// =================================
// TASK 1 - map() and filter()
// =================================

const prices = [120, 250, 300, 450, 600];

// 1. Filter prices greater than 250
const filteredPrices = prices.filter(price => price > 250);

// 2. Apply 10% discount using map()
const discountedPrices = filteredPrices.map(
    price => price * 0.90
);

// 3. Display original and discounted arrays
output.innerHTML += `
    <h2>Task 1 - Price Discount</h2>

    <p><b>Original Prices:</b>
    ${prices.join(", ")}</p>

    <p><b>Prices Greater Than 250:</b>
    ${filteredPrices.join(", ")}</p>

    <p><b>After 10% Discount:</b>
    ${discountedPrices.join(", ")}</p>
`;


// =================================
// TASK 2 - reduce()
// =================================

const expenses = [
    {
        category: "Food",
        amount: 300
    },
    {
        category: "Transport",
        amount: 150
    },
    {
        category: "Shopping",
        amount: 400
    }
];

// Calculate total expense
const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
);

output.innerHTML += `
    <h2>Task 2 - Total Expense</h2>

    <p>Food: ₹300</p>
    <p>Transport: ₹150</p>
    <p>Shopping: ₹400</p>

    <p><b>Total Expense: ₹${totalExpense}</b></p>
`;


// =================================
// TASK 3 - filter + map + reduce
// =================================

const scores = [45, 80, 90, 35, 60, 75];

// 1. Filter passing scores
const passingScores = scores.filter(
    score => score >= 50
);

// 2. Add 10 bonus marks
const bonusScores = passingScores.map(
    score => score + 10
);

// 3. Calculate total
const totalScores = bonusScores.reduce(
    (sum, score) => sum + score,
    0
);

output.innerHTML += `
    <h2>Task 3 - Score Processing</h2>

    <p><b>Original Scores:</b>
    ${scores.join(", ")}</p>

    <p><b>Passing Scores:</b>
    ${passingScores.join(", ")}</p>

    <p><b>After +10 Bonus:</b>
    ${bonusScores.join(", ")}</p>

    <p><b>Total:</b> ${totalScores}</p>
`;


// =================================
// MINI CHALLENGE
// Student Score Analyzer
// =================================

const students = [
    {
        name: "Aman",
        marks: 85
    },
    {
        name: "Sara",
        marks: 42
    },
    {
        name: "Riya",
        marks: 68
    },
    {
        name: "John",
        marks: 49
    }
];

// 1. Filter students who passed
const passedStudents = students.filter(
    student => student.marks >= 50
);

// 2. Add +5 bonus marks
const finalScores = passedStudents.map(
    student => ({
        name: student.name,
        score: student.marks + 5
    })
);

// 3. Calculate total
const totalClassMarks = finalScores.reduce(
    (total, student) => total + student.score,
    0
);

// 4. Calculate class average
const classAverage =
    totalClassMarks / finalScores.length;


// Display each student's name and score
output.innerHTML += `
    <h2>Mini Challenge - Student Score Analyzer</h2>
`;

finalScores.forEach(student => {

    output.innerHTML += `
        <p>
            <b>${student.name}:</b>
            ${student.score}
        </p>
    `;

});

output.innerHTML += `
    <p>
        <b>Class Average:</b>
        ${classAverage}
    </p>
`;