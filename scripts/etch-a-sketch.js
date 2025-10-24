//Written By Riley Tyler
//Etch A Sketch

//General Variables
let mainContainer = document.getElementById('main-container');

//Make Grid on Start
let gridSize = 32;
createGrid(gridSize);

//add event listener to grid size button
document.getElementById("grid-size-button").addEventListener("click", promptSetGridSize);

//Functions

function createGrid(gridSize) {
    // Set the CSS variable for grid size
    document.documentElement.style.setProperty('--grid-size', gridSize);
    
    //Create Divs
    for(let i = 0; i < (gridSize * gridSize); i++) {
        let div = document.createElement('div');
        div.style.opacity = "0";
        div.className = "grid-div-item";
        mainContainer.appendChild(div);
        div.addEventListener('mouseover', (event) => {
            let target = event.target;
            console.log((parseFloat(target.style.opacity) + .10) + "0");
            target.style.opacity = (parseFloat(target.style.opacity) + .10);
        });
    }
    //Format Main Container

}

function promptSetGridSize() {
    
}

function removeGrid() {
    mainContainer.replaceChildren("");
}