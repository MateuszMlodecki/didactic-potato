function goToHome() {
  window.location.href = "http://localhost:5500/index.html";
}

// tutaj kod todolist
let todoInput;
let errorInfo;
let addBtn;
let ulList;
let newTask;
let popup;
let popupInfo;
let todoToEdit;
let popupInput;
let popupAddBtn;
let popupCloseBtn;

const prepareDOMElements = () => {
  todoInput = document.querySelector(".todo-input");
  errorInfo = document.querySelector(".error-info");
  addBtn = document.querySelector(".toDoButtons");
  ulList = document.querySelector(".todo-ul");

  popup = document.querySelector(".popup");
  popupInfo = document.querySelector(".popup-info");
  popupInput = document.querySelector(".popup-input");
  popupAddBtn = document.querySelector(".accept");
  popupCloseBtn = document.querySelector(".cancel");
};

const prepareDOMEvents = () => {
  addBtn.addEventListener("click", addNewTask);
  ulList.addEventListener("click", checkClick);
  popupCloseBtn.addEventListener("click", closePopup);
  popupAddBtn.addEventListener("click", changeTodoText);
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
const checkClick = (e) => {
  if (e.target.matches(".complete")) {
    e.target.closest("li").classList.toggle("completed");
  } else if (e.target.matches(".edit")) {
    editTodo(e);
  } else if (e.target.matches(".delete")) {
    const taskToDelete = e.target.closest("li");
    if (taskToDelete) {
      taskToDelete.remove();
    }
  }
};

const editTodo = (e) => {
  todoToEdit = e.target.closest("li");
  popupInput.value = todoToEdit.firstChild.textContent;
  popup.style.display = "flex";
};
const closePopup = () => {
  popup.style.display = "none";
  popupInfo.textContent = "";
};
const changeTodoText = () => {
  if (popupInput.value !== "") {
    todoToEdit.firstChild.textContent = popupInput.value;
    popupInfo.textContent = "";
    closePopup();
  } else {
    popupInfo.textContent = "Musisz podać jakąś treść!";
  }
};

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};
document.addEventListener("DOMContentLoaded", main);
