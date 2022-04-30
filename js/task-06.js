const inputRef = document.querySelector('#validation-input');
const validInputLength = inputRef.getAttribute("data-length");

inputRef.addEventListener('change', () => {
    if (inputRef.value.length === +validInputLength) {
        inputRef.classList.remove("invalid");
        inputRef.classList.add("valid");
    } else {
        inputRef.classList.remove("valid");
        inputRef.classList.add("invalid");
    }
   
});


