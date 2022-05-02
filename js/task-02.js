const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients'); 
const addListItems = (array, targetNode) => {  
  const newArrItem = array.map(itemLi => {   
    const listItem = document.createElement('li')
    listItem.textContent = itemLi;
  
    return listItem;
  });
  targetNode.append(...newArrItem);
  
};
addListItems(ingredients, ingredientsListRef);




