const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
inputRef.addEventListener("input", changeFontSize);
function changeFontSize(e) {
  spanRef.style.fontSize = e.target.value + "px";
};