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
        currentCell.textContent = 'test';
        currentRow.appendChild(currentCell);
    }
    rowContainer.appendChild(currentRow);
}

// add flexbox to containers
rowContainer.style.display = 'flex';
rowContainer.style.cssText = 'flex-direction: column';

const rows = document.querySelectorAll('.row');
rows.forEach( (r) => r.setAttribute('style', 'display: flex;') );
