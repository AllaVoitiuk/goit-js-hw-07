const refs = {
    inputControl: document.querySelector("#font-size-control"),
    textName: document.querySelector("#text"),   
};

refs.inputControl.addEventListener("input", onInputChange);

function onInputChange(event) {

    refs.textName.style.fontSize = event.currentTarget.value  + "px";        
}