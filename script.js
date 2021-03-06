
mainContainer = document.querySelector("#main-container");
opacityButton = document.querySelector("#opacity-button");
resetButton = document.querySelector("#reset-button");
rainbowButton = document.querySelector('#rainbow-button');
rangeInput = document.querySelector('#range');

createGrid(16);
let isOpacity = false;
let isRainbow = false;

opacityButton.addEventListener('click', changeOpacity);
resetButton.addEventListener('click', () => {deleteGrid(); createGrid(16);})
rainbowButton.addEventListener('click', changeRainbow);
rangeInput.addEventListener('input', () => {deleteGrid(); createGrid(rangeInput.value)});

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
    if(isRainbow){
        const randomColor =
            Math.floor(Math.random()*16777215).toString(16);
            square.style.backgroundColor = '#' + randomColor;
    } else {
        square.style.backgroundColor = "black";
    }

}

function changeOpacity(e){
    if(isOpacity) {
        isOpacity = false;
        e.target.textContent = "Opacity OFF";
    } else {
        isOpacity = true;
        e.target.textContent = "Opacity ON";
    }
}

function changeRainbow(e){
    if(isRainbow) {
        isRainbow = false;
        e.target.textContent = "Rainbow OFF";
    } else {
        isRainbow = true;
        e.target.textContent = "Rainbow ON";
    }
}

function deleteGrid(){
    while (mainContainer.firstChild)  {
        mainContainer.removeChild(mainContainer.lastChild);
    }
}

