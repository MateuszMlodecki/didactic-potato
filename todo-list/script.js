function goToHome() {
  window.location.href = "http://localhost:5500/index.html";
}

// tutaj kod todolist
document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("todo-form");
  let input = document.getElementById("todo-input");
  let ul = document.getElementById("todo-ul");

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
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.addEventListener("click", function () {
      deleteToDoItem(li);
    });
    li.appendChild(deleteButton);

    /*
    deleteButton = ...
    deleteButton.textContent = 
    deleteButton.addEvent na "click", fucn () {
    deleteToDoItem(param)
    }
    appenchild(deleteButton)
    
    */

    ul.appendChild(li);
  }
  function deleteToDoItem(li) {
    ul.removeChild(li);
  }

  /*
  fn deleteToDo...(param){
  ul.removechild(param)
  }

  */
});
