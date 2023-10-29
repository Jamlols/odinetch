const square = document.querySelector("#container");

for (i = 0; i < 256; i++) {
    drawingSquares = document.createElement("div");
    drawingSquares.classList.add("draw");
    square.appendChild(drawingSquares);
}

const highlight = document.getElementsByClassName("draw");

let mouseIsDown = false;

function handleMouseEnter(event) {
    if (mouseIsDown) {
        event.target.style.backgroundColor = "red";
    }
}

function handleMouseDown(event) {
    mouseIsDown = true;
    event.target.style.backgroundColor = "red";
}

function handleMouseUp() {
    mouseIsDown = false;
}

document.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mouseup", handleMouseUp);

for (let element of highlight) {
    element.addEventListener("mouseenter", handleMouseEnter);

}
