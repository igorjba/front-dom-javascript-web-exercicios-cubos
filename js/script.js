const text = document.querySelector(".text")

const underlineButton = document.querySelector(".style-underline")
const applyUnderlineButton = () => {
    if (text.style.textDecoration != "underline") {
        text.style.textDecoration = "underline";
    }
    else {
        text.style.textDecoration = "none";
    }
}
underlineButton.onclick = applyUnderlineButton

const italicButton = document.querySelector(".style-italic")
const applyItalicButton = () => {

    if (text.style.fontStyle != "italic") {
        text.style.fontStyle = "italic";
    }
    else {
        text.style.fontStyle = "normal";
    }
}
italicButton.onclick = applyItalicButton

const boldButton = document.querySelector(".style-bold")
const applyBoldButton = () => {

    if (text.style.fontWeight != "bold") {
        text.style.fontWeight = "bold";
    }
    else {
        text.style.fontWeight = "normal";
    }
}
boldButton.onclick = applyBoldButton

const size = document.querySelector(".size-text")
let fontSize = 16;

const reduceButton = document.querySelector(".size-reduce")
const applyReduceButton = () => {
    if (fontSize > 2) {
        fontSize = fontSize - 2;
    }
    text.style.fontSize = `${fontSize}px`;
    size.textContent = `${fontSize}`
}
reduceButton.onclick = applyReduceButton

const increaseButton = document.querySelector(".size-increase")
const applyIncreaseButton = () => {
    fontSize = fontSize + 2;
    text.style.fontSize = `${fontSize}px`;
    size.textContent = `${fontSize}`
}
increaseButton.onclick = applyIncreaseButton

const colorButtonOne = document.querySelector(".button-color-one")
const applycolorButtonOne = () => {
    if (text.style.color != "rgb(255, 0, 0)") {
        text.style.color = "rgb(255, 0, 0)";
    }
    else {
        text.style.color = "rgb(0, 0, 0)";
    }
}
colorButtonOne.onclick = applycolorButtonOne

const colorButtonTwo = document.querySelector(".button-color-two")
const applycolorButtonTwo = () => {
    if (text.style.color != "rgb(0, 0, 255)") {
        text.style.color = "rgb(0, 0, 255)";
    }
    else {
        text.style.color = "rgb(0, 0, 0)";
    }
}
colorButtonTwo.onclick = applycolorButtonTwo

const colorButtonThree = document.querySelector(".button-color-three")
const applycolorButtonThree = () => {
    if (text.style.color != "rgb(128, 0, 128)") {
        text.style.color = "rgb(128, 0, 128)";
    }
    else {
        text.style.color = "rgb(0, 0, 0)";
    }
}
colorButtonThree.onclick = applycolorButtonThree

const colorButtonFour = document.querySelector(".button-color-four")
const applycolorButtonFour = () => {
    if (text.style.color != "rgb(0, 0, 0)") {
        text.style.color = "rgb(0, 0, 0)";
    }
}
colorButtonFour.onclick = applycolorButtonFour


