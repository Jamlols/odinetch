const square = document.querySelector("#container");

for (i = 0; i < 16; i++) {
    drawingSquares = document.createElement("div");
    drawingSquares.textContent = "hi";
    drawingSquares.classList.add("draw");
    square.appendChild(drawingSquares);
}


