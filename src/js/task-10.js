const refs = {
  numberInput: document.querySelector("input"),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxesDiv: document.querySelector("#boxes"),
}

refs.createBtn.addEventListener("click",onCreateBtnClick);
refs.destroyBtn.addEventListener("click",destroyBoxes);

function getRandomHexColor() {
  
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {   

  for (let i = 0; i < amount; i+=1) {
    
    const newBox = document.createElement("div");

    newBox.style.width = (30+10*i) +"px";
    newBox.style.height = (30+10*i)+"px";    
    newBox.style.background = getRandomHexColor();
    
    refs.boxesDiv.append(newBox);    
   }
}

function destroyBoxes(event) {

  while (refs.boxesDiv.firstChild) {
    refs.boxesDiv.removeChild(refs.boxesDiv.firstChild);
  }
}

function onCreateBtnClick() {
  
  createBoxes(refs.numberInput.valueAsNumber);
} 