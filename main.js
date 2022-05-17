const rowContainer = document.querySelector('.row-container');

const sides = 16;

// create grid
for(let i = 0; i < sides; i++){
    const currentRow = document.createElement('div');
    currentRow.classList.add('row');
    // add cells
    for(let j = 0; j < sides; j++){
        const currentCell = document.createElement('div');
        currentCell.classList.add('cell');
        currentRow.appendChild(currentCell);
    }
    rowContainer.appendChild(currentRow);
}

// Change color when hovering
const cells = document.querySelectorAll('.cell');

cells.forEach( (c) => {
    c.addEventListener('mouseover', function(){
        this.style.backgroundColor = 'black';
    });
});