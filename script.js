
mainContainer = document.querySelector("#main-container");
opacityButton = document.querySelector("#opacity-button");
resetButton = document.querySelector("#reset-button");

createGrid(16);
let isOpacity = false;

opacityButton.addEventListener('click', changeOpacity)

function createGrid(amount){
    mainContainer.style.gridTemplateColumns = "repeat(" + amount + ", 1fr)";
    for(i = 0; i < (amount * amount); i++){
        let square = document.createElement('div');
        square.className = "etch-pixel";
        mainContainer.appendChild(square);
        square.addEventListener('mouseover', drawSquare);
    }
}

function drawSquare(e){
    let square = e.target;
    let opacity = square.style.opacity;
    if(isOpacity){
        //This first statement checks if opacity is not defined yet
        if(opacity === ""){
            opacity = 0.1
            square.style.opacity = opacity;
        } else if(opacity < 1){
            opacity = parseFloat(opacity) + 0.1;
            square.style.opacity = opacity;
        }
    } else {
        square.style.opacity = 1.0;
    }
    square.style.backgroundColor = "black";

}

function changeOpacity(e){
    if(isOpacity) {
        isOpacity = false;
        e.target.textContent = "Opacity OFF";
        console.log(e);
    } else {
        isOpacity = true;
        e.target.textContent = "Opacity ON";
        console.log(e);
    }
}

function deleteGrid(){
    while (mainContainer.firstChild)  {
        mainContainer.removeChild(mainContainer.lastChild);
    }
}