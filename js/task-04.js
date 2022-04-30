const incremBtnRef = document.querySelector('[data-action="increment"]');
const decremBtnRef = document.querySelector('[data-action="decrement"]');
const spanValue = document.querySelector('#value');

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
};
incremBtnRef.addEventListener('click', increment);
decremBtnRef.addEventListener('click', decrement);

