const toDoForm = document.querySelector("#todo-form");
const list = document.querySelector("#list");
const dateText = document.querySelector("#date");

toDoForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    var text = evt.target["new-todo"].value;
    const newListItem = document.createElement("li");
    newListItem.innerHTML = '<li>' + text + ' <button class="delete-btn" onclick="Delete(this);">Delete</button> </li>';
    list.appendChild(newListItem);
});

function Delete(currentEl){
    const listItem = currentEl.parentElement;
    listItem.remove();
}

function showDate(){
    const now = new Date();
    dateText.innerText = now.toLocaleString();
}
