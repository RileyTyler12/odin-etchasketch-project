//Written By Riley Tyler
//Etch A Sketch

//General Variables
let mainContainer = document.getElementById('main-container');
let gridSize = 16;
let paintIntensity = "10";
let paintColor = "#000000";
isDrawing = false;

//Make Grid on Start
createGrid();

//Add mouse down/up listeners to the container to handle drawing boolean
mainContainer.addEventListener('mousedown', () => isDrawing = true);
mainContainer.addEventListener('mouseup', () => isDrawing = false);
mainContainer.addEventListener('mouseleave', () => isDrawing = false);

//add event listener to grid size button
document.getElementById("grid-reset-button").addEventListener("click", resetGrid);

//add event listener to grid size button
document.getElementById("grid-size-button").addEventListener("click", promptSetGridSize);

//add event listener and function to paint intensity
document.getElementById("paint-intensity-slider").addEventListener('input', (event) => {
    let inputValue = document.getElementById("paint-intensity-slider").value;
    paintIntensity = inputValue;
    console.log('slider activated');
})
//add event listener and function to paint color
document.getElementById("paint-color-picker").addEventListener('input', (event) => {
    let inputValue = document.getElementById("paint-color-picker").value;
    paintColor = inputValue;
    console.log('color picker activated')
})

//Functions

function createGrid() {
    // Set the CSS variable for grid size
    document.documentElement.style.setProperty('--grid-size', gridSize);
    
    //Create Divs
    for(let i = 0; i < (gridSize * gridSize); i++) {
        let div = document.createElement('div');
        div.style.opacity = "0";
        div.setAttribute("draggable", 'false');
        div.className = "grid-div-item";
        mainContainer.appendChild(div);
        div.addEventListener('mouseover', (event) => {
            if (!isDrawing) return;
            let target = event.target;
            console.log(parseFloat(target.style.opacity) + parseFloat(("." + paintIntensity))); // for debugging
            target.style.opacity = (parseFloat(target.style.opacity) + parseFloat("." + paintIntensity));
            target.style.backgroundColor = paintColor;
        });
        // Add mousedown event to handle initial click
        div.addEventListener('mousedown', (event) => {
            let target = event.target;
            target.style.opacity = (parseFloat(target.style.opacity) + parseFloat("." + paintIntensity));
            target.style.backgroundColor = paintColor;
        });
    }
    updateGridSizeText();
}

function promptSetGridSize() {
    let validInput = false;
    let userInput = prompt("Enter new grid size from 0 to 100:");
    while (validInput === false) {
        //validate user input
        let userInt = parseInt(userInput);
        if (userInt > 0 && userInt <= 100) {
            validInput = true;
            gridSize = userInt;
            resetGrid();
        }
        else {
            userInput = prompt("Invalid Input. Please enter new grid size from 0 to 100:");
        }
    }
}

function resetGrid() {
    mainContainer.replaceChildren("");
    createGrid();
}

function updateGridSizeText() {
    let element = document.getElementById("grid-size-text");
    element.textContent = "Current Grid Size: " + gridSize;
}