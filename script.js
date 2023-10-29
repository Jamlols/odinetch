const square = document.querySelector("#container");

for (i = 0; i < 256; i++) {
    drawingSquares = document.createElement("div");
    drawingSquares.classList.add("draw");
    square.appendChild(drawingSquares);
}

const highlight = document.getElementsByClassName("draw");

let mouseIsDown = false;

function handleMouseEnter(event) {
    if (mouseIsDown && event.target.classList.contains('draw')) {
        event.target.style.backgroundColor = "red";
    }
}

function handleMouseDown(event) {
    if (event.target.classList.contains('draw')) {
        mouseIsDown = true;
        event.target.style.backgroundColor = "red";
        event.preventDefault();
    }

}

function handleMouseUp() {
    mouseIsDown = false;
}

document.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mouseup", handleMouseUp);

for (let element of highlight) {
    element.addEventListener("mouseenter", handleMouseEnter);

}

let clearButton = document.querySelector("#clear");

function clear() {
    let draws = document.getElementsByClassName("draw");

    for (i = 0; i < draws.length; i++) {
        draws[i].style.backgroundColor = "white";
    }
}

clearButton.addEventListener('click', clear);

gridSlider = document.querySelector("#gridRange");

function adjustGridSize(newSize) {
    square.innerHTML = '';

    for (let i = 0; i < newSize * newSize; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("draw");
        newSquare.addEventListener("mouseenter", handleMouseEnter);
        square.appendChild(newSquare);
    }

    square.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
    square.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;

    document.addEventListener("mousedown", handleMouseDown);
}

adjustGridSize(gridSlider.value);

gridSlider.addEventListener('input', function() {
    let sliderValue = parseInt(gridSlider.value);
    adjustGridSize(sliderValue);
})

const gridSizeDisplay = document.querySelector("#gridSizeDisplay");

gridSlider.addEventListener('input', function() {
    let newSize = parseInt(gridSlider.value);
    gridSizeDisplay.textContent = newSize;
    setupGrid(newSize);
})