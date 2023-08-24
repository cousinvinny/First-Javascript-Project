
const acceptQuestButton = document.getElementById('accept-quest-button');
const questTitle = document.getElementById('quest-title');
const questTitleInput = document.getElementById('quest-title-input');

acceptQuestButton.addEventListener('click', function () {
    const newTitle = questTitleInput.value;
    questTitle.textContent = newTitle;

});




const addObjectiveButton = document.getElementById('add-objective-button');
const additionalInputContainer = document.getElementById('additional-input-container');

addObjectiveButton.addEventListener('click', function () {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = 'Additional Input';
    additionalInputContainer.appendChild(newInput);
});