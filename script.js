const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');

function createGrid(squaresPerSide) {
    container.innerHTML = '';
    const squareSize = 960 / squaresPerSide;
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'lightblue';
        });
        container.appendChild(square);
    }
}

function resetGrid() {
    let userInput = parseInt(prompt('Enter grid size (max 100):'), 10);
    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        alert('Invalid input. Please enter a number between 1 and 100.');
        return;
    }
    createGrid(userInput);
}

resetButton.addEventListener('click', resetGrid);
createGrid(16);
