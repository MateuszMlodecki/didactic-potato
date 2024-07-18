function goToHome() {
  window.location.href = "http://localhost:5500/index.html";
}

// tutaj kod todolist
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const ul = document.getElementById("todo-ul");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let toDoText = input.value;

    if (toDoText !== "") {
      addToDoItem(toDoText);
      input.value = "";
    }
  });

  function addToDoItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.addEventListener("click", function () {
      deleteToDoItem(li);
    });
    li.appendChild(deleteButton);
    ul.appendChild(li);
  }
  function deleteToDoItem(li) {
    ul.removeChild(li);
  }
});
