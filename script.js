const container = document.querySelector(".container")


function createBox(){
    for (let i=0; i<50 ; i++){
       const boxElement= createElement(`Elem${i}`, i , `Element ${i}`);
       container.append(boxElement);
    
    }
   
   
}
function createElement(symbol, atomicNumber, name){
  
    const boxElem = document.createElement("div");
    boxElem.classList.add("boxes");
    boxElem.textContent= symbol;
    boxElem.setAttribute("data-atomic-number", atomicNumber);
    boxElem.setAttribute("data-element-name", name);
    
    return boxElem;
}
createBox();
function handleClick(e){
    if (e.target.classList.contains("boxes"))
        { 
           alert(`Atomic Number: ${e.target.getAttribute("data-atomic-number")} and Name of Element: ${e.target.getAttribute("data-element-name")}`)
        };
  
}
container.addEventListener('click', handleClick);