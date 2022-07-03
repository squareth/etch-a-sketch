
mainContainer = document.querySelector("#main-container");
createGrid(16);
let isOpacity = false;

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
    }
    square.style.backgroundColor = "black";

}