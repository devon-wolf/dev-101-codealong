const displayName = document.getElementById('display-name');
const nameForm = document.querySelector('form');
const nameInput = document.querySelector('input');

nameForm.addEventListener('submit', e => {
    e.preventDefault();
    displayName.textContent = nameInput.value;
    nameInput.value = '';
});
