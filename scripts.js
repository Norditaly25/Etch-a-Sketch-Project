const gridSize= 16;
const gridContainer = document.querySelector(".gridContainer");
const fragment = document.createDocumentFragment();

for (let rows = 0; rows < gridSize; rows++) {
    for (let columns = 0; columns < gridSize; columns++) {
        const gridCell = document.createElement("div");
        fragment.appendChild(gridCell);
        gridCell.classList.add("gridCell");
    }
    
} 
gridContainer.appendChild(fragment);