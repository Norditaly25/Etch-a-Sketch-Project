const gridSize= 16;
const gridContainer = document.querySelector(".gridContainer");


function createGrid(size) {
    const fragment = document.createDocumentFragment();
    gridContainer.innerHTML= "";

    for (let rows = 0; rows < size; rows++) {
        for (let columns = 0; columns < size; columns++) {
            const gridCell = document.createElement("div");
            gridCell.classList.add("gridCell");
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
