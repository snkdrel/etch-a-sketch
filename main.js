const rowContainer = document.querySelector('.row-container');

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

    // Add event listener to cells
    addFunctionToCells();
}

// Change color when hovering
function  addFunctionToCells(){
    const cells = document.querySelectorAll('.cell');

    cells.forEach( (c) => {
        c.addEventListener('mouseover', function(){
            this.style.backgroundColor = 'black';
        });
    });   
}

// Select number of sides
const chooseSidesButton = document.querySelector('.button-sides');
chooseSidesButton.addEventListener('click', function(){
    let numSides = prompt('Choose number of squares per side for the grid (< 100):');
    createGrid(numSides);
});