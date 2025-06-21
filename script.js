const container = document.querySelector(".container")


function createBox(){
    for (i=0; i<50 ; i++){
    const boxElem = document.createElement("div");
    boxElem.classList.add("boxes");
    boxElem.textContent="new";
    container.append(boxElem);
    }
   
}
createBox();