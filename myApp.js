
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
    newInput.placeholder = 'Quest Objective';
    newInput.style.marginLeft = '0.7%';
    newInput.id = "quest-objective";
    addObjectiveButton.remove();
    additionalInputContainer.appendChild(newInput);
    const deleteObjectiveButton = document.createElement('button');
    deleteObjectiveButton.id = "delete-objective-button";
    deleteObjectiveButton.innerHTML = '-';
    additionalInputContainer.appendChild(deleteObjectiveButton);
    additionalInputContainer.appendChild(addObjectiveButton);
});