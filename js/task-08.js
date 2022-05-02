const addBtnRef = document.querySelector('[data-action="render"]');
const clearBtnRef= document.querySelector('[data-action="destroy"]');
const divRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls input');

const createBoxes = () => {
  destroyBoxes();
  const newArray = [];
	const amount = Number(inputRef.value);
  for(let i=0; i < amount; i+=1){
    const div = document.createElement('div');
  	const size = 30 + i * 10;
  	div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomColor()}`;
    newArray.push(div);
  }
  divRef.append(...newArray);
};
 

const destroyBoxes = () => {
  divRef.innerHTML = '';
}

const getRandomColor = () =>{
  return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
}

addBtnRef.addEventListener('click', createBoxes);
clearBtnRef.addEventListener('click', destroyBoxes);