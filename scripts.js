const gridSize= 16;
const gridContainer = document.querySelector(".gridContainer");


function createGrid(size) {
    const fragment = document.createDocumentFragment();
    gridContainer.innerHTML= "";
    const totalGridSize = 512;
    const baseGridSize = 512; 
    const maxGridSize = Math.min(window.innerWidth * 0.8, window.innerHeight * 0.8); 
    const completeGridSize = maxGridSize; 
    const cellSize = completeGridSize / size;
    gridContainer.style.width = `${completeGridSize}px`;
    gridContainer.style.height = `${completeGridSize}px`;

    for (let rows = 0; rows < size; rows++) {
        for (let columns = 0; columns < size; columns++) {
            const gridCell = document.createElement("div");
            gridCell.classList.add("gridCell");
            gridCell.style.width = `${cellSize}px`;
            gridCell.style.height = `${cellSize}px`;
            gridCell.addEventListener("mouseover", function() {
            gridCell.classList.add("hovered");
            });
            fragment.appendChild(gridCell);
        }
        
    }
    gridContainer.appendChild(fragment);
}
createGrid(gridSize);

document.querySelector("#gridBtn").addEventListener("click", () => {
    let userGrid = prompt("Input a number between 1 and 100:");
    while (isNaN(userGrid) || userGrid < 1 || userGrid > 100 || userGrid === "") {
        userGrid = prompt("Invalid input! Enter a number between 1 and 100:")        
    }
    userGrid = Number(userGrid);
    createGrid(userGrid);
});
