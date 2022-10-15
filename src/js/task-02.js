const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('#ingredients');
  
ingredients.forEach(ingredient => {

  const liRef = document.createElement("li"); 
  liRef.classList.add("item");
  liRef.textContent = ingredient;
  // console.log(liRef);
  ulRef.append(liRef); 
  
});









