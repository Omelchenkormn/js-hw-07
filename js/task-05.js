

let event_pl = document.querySelector('#name-input');
let span = document.querySelector('#name-output');

event_pl.addEventListener('input', e => {
    event_pl.value === ''
        ? span.textContent = 'незнакомец'
        : span.textContent = event_pl.value;
});
console.dir(event_pl);

