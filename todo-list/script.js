function goToHome() {
  window.location.href = "http://localhost:5500/index.html";
}

// tutaj kod todolist
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const ul = document.getElementById("todo-ul");

  loadToDoItems();

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let toDoText = input.value;

    if (toDoText !== "") {
      addToDoItem(toDoText);
      input.value = "";
      saveToDoItems();
    }
  });

  function addToDoItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    li.className = "liMargin";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.className = "myButtonX";
    deleteButton.addEventListener("click", function () {
      deleteToDoItem(li);
    });
    li.appendChild(deleteButton);
    ul.appendChild(li);
  }

  function deleteToDoItem(li) {
    ul.removeChild(li);
    saveToDoItems();
  }

  function saveToDoItems() {
    const items = [];
    ul.querySelectorAll("li").forEach((li) => {
      items.push(li.firstChild.textContent);
    });
    localStorage.setItem("todoItems", JSON.stringify(items));
  }

  function loadToDoItems() {
    const items = JSON.parse(localStorage.getItem("todoItems")) || [];
    items.forEach((item) => {
      addToDoItem(item);
    });
  }
});
