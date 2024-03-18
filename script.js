const toDoForm = document.querySelector("#todo-form");
const list = document.querySelector("#list");

toDoForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const newListItem = document.createElement("li");
    newListItem.innerText = evt.target["new-todo"].value;
    list.appendChild(newListItem);
});