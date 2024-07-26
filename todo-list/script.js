function goToHome() {
  window.location.href = "http://localhost:5500/index.html";
}

// tutaj kod todolist
let todoInput;
let errorInfo;
let addBtn;
let ulList;
let newTask;

const prepareDOMElements = () => {
  todoInput = document.querySelector(".todo-input");
  errorInfo = document.querySelector(".error-info");
  addBtn = document.querySelector(".toDoButtons");
  ulList = document.querySelector(".todo-ul");
};

const prepareDOMEvents = () => {
  addBtn.addEventListener("click", addNewTask);
};
const addNewTask = (e) => {
  e.preventDefault();
  if (todoInput.value !== "") {
    newTask = document.createElement("li");
    newTask.classList.add("item");
    newTask.textContent = todoInput.value;
    addTools(newTask);
    ulList.append(newTask);

    todoInput.value = "";
    errorInfo.textContent = "";
  } else {
    errorInfo.textContent = "wpisz treść zadania!";
  }
};
const addTools = () => {
  const toolsPanel = document.createElement("div");
  toolsPanel.classList.add("tools");
  newTask.append(toolsPanel);

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete");
  completeBtn.textContent = "✅";

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.textContent = "✏️";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.textContent = "🚫";

  toolsPanel.append(completeBtn, editBtn, deleteBtn);
};

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};
document.addEventListener("DOMContentLoaded", main);
