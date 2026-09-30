let text = document.getElementById("text");

let fontSize = 30;


// Change Text Color
function changeColor(color) {
    text.style.color = color;
}


// Change Font Family
function changeFont(font) {
    text.style.fontFamily = font;
}


// Increase Font Size
function increaseSize() {
    fontSize = fontSize + 2;
    text.style.fontSize = fontSize + "px";
}


// Decrease Font Size
function decreaseSize() {
    fontSize = fontSize - 2;
    text.style.fontSize = fontSize + "px";
}


// Bold on Mouseover
function makeBold() {
    text.style.fontWeight = "bold";
}


// Italic on Mouseover
function makeItalic() {
    text.style.fontStyle = "italic";
}


// Underline on Mouseover
function makeUnderline() {
    text.style.textDecoration = "underline";
}


// Normal text
function normalText() {
    text.style.fontWeight = "normal";
    text.style.fontStyle = "normal";
    text.style.textDecoration = "none";
}