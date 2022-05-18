const rowContainer = document.querySelector('.row-container');
const gridWidth = 800; // Fixed width for grid (in pixels)

// create initial grid
createGrid(16);

function createGrid(sqrsPerSide){
    // Limits range
    if(sqrsPerSide < 0 || sqrsPerSide > 100){
        alert("Choose a number between 0 and 100");
        sqrsPerSide = 16;
    }

    // Clear previous grid
    rowContainer.textContent = '';

    for(let i = 0; i < sqrsPerSide; i++){
        const currentRow = document.createElement('div');
        currentRow.classList.add('row');
        // add cells
        for(let j = 0; j < sqrsPerSide; j++){
            const currentCell = document.createElement('div');
            currentCell.classList.add('cell');
            currentRow.appendChild(currentCell);
        }
        rowContainer.appendChild(currentRow);
    }

    // Change cell size
    adjustCellWidth(sqrsPerSide);

    // Add event listener to cells
    addFunctionToCells();
}

// Determine pixels per cell
function adjustCellWidth(sqrsPerSide){
    const cellWidth = gridWidth / sqrsPerSide;
    const styleStr = 'width: ' + cellWidth + 'px; height: ' + cellWidth + 'px;' +
    'background-color: #eeebe2;'; // change color too!

    const cells = document.querySelectorAll('.cell');
    cells.forEach( (c) =>{
        c.style.cssText = styleStr;
    } );
}

// Change color when hovering
function  addFunctionToCells(){
    const cells = document.querySelectorAll('.cell');

    cells.forEach( (c) => {
        c.addEventListener('mouseover', function(){
            this.style.backgroundColor = '#3c3c3c';
        });
    });   
}

// Select number of sides
const chooseSidesButton = document.querySelector('.button-sides');
chooseSidesButton.addEventListener('click', function(){
    let numSides = prompt('Choose number of squares per side for the grid (< 100):');
    createGrid(numSides);
});