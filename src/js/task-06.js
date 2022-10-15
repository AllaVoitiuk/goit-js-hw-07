const  input = document.querySelector("#validation-input");
input.addEventListener("blur", onInputBlur);

function onInputBlur (event) {
  
if (event.currentTarget.value.length === 6){
    input.classList.remove("invalid");
    input.classList.add("valid");
    
} else {
    input.classList.remove("valid");
    input.classList.add("invalid");    
}

 return input;
}