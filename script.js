const toDoForm = document.querySelector("#todo-form");
const currentList = document.querySelector("#current-list");
const dateText = document.querySelector("#date");
const completeList = document.querySelector("#complete-list");

toDoForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    var text = evt.target["new-todo"].value;
    const newListItem = document.createElement("li");
    newListItem.innerText = text;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function(){
        Delete(this);
    };
    newListItem.appendChild(deleteButton);
    currentList.appendChild(newListItem);
    
});

function Delete(currentEl){
    const listItem = currentEl.parentElement;
    listItem.remove();
}

function showDate(){
    const now = new Date();
    dateText.innerText = now.toLocaleString();
}

// function moveToComplete(currentEl){
//     const listItem = currentEl.parentElement;
//     const text = listItem.innerText;
//     const newListItem = document.createElement("li");
//     newListItem.innerText = text;
//     completeList.appendChild(newListItem);
// }
