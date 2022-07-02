
mainContainer = document.querySelector("#main-container");
createGrid(16);

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
    console.log(e.target);
}