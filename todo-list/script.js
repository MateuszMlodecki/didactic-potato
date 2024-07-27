// Tutaj kod todolist
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

const prepareDOM = () => {
  todoInput = document.querySelector(".todo-input");
  errorInfo = document.querySelector(".error-info");
  addBtn = document.querySelector(".toDoButtons");
  ulList = document.querySelector(".todo-ul");

  popup = document.querySelector(".popup");
  popupInfo = document.querySelector(".popup-info");
  popupInput = document.querySelector(".popup-input");
  popupAddBtn = document.querySelector(".accept");
  popupCloseBtn = document.querySelector(".cancel");

  addBtn.addEventListener("click", addNewTask);
  ulList.addEventListener("click", checkClick);
  popupCloseBtn.addEventListener("click", closePopup);
  popupAddBtn.addEventListener("click", changeTodoText);
};

const addNewTask = (e) => {
  e.preventDefault();
  const taskTextValue = todoInput.value;
  if (taskTextValue !== "") {
    const newTask = document.createElement("li");
    newTask.classList.add("item");
    const taskText = document.createElement("p");
    taskText.style = "margin: 0";
    taskText.textContent = taskTextValue;
    newTask.appendChild(taskText);
    addTools(newTask);
    ulList.append(newTask);
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: taskTextValue, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    todoInput.value = "";
    errorInfo.textContent = "";
  } else {
    errorInfo.textContent = "Wpisz treść zadania!";
  }
};

const addTools = (newTask) => {
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
  if (e.target.matches(".delete")) {
    const taskToDelete = e.target.closest("li");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskIndex = tasks.findIndex(
      (task) => task.text === taskToDelete.firstChild.textContent
    );
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    taskToDelete.remove();
  } else if (e.target.matches(".complete")) {
    e.target.closest("li").classList.toggle("completed");
  } else if (e.target.matches(".edit")) {
    editTodo(e);
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
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskIndex = tasks.findIndex(
    (task) => task.text === todoToEdit.firstChild.textContent
  );
  if (taskIndex !== -1) {
    tasks[taskIndex].text = popupInput.value;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  if (popupInput.value !== "") {
    todoToEdit.firstChild.textContent = popupInput.value;
    popupInfo.textContent = "";
    closePopup();
  } else {
    popupInfo.textContent = "Musisz podać jakąś treść!";
  }
};

const main = () => {
  prepareDOM();
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (tasks.length === 0) {
    errorInfo.textContent = "Brak zadań na liście";
  } else {
    tasks.forEach((task) => {
      const newTask = document.createElement("li");
      newTask.classList.add("item");
      const taskText = document.createElement("p");
      taskText.style = "margin: 0";
      taskText.textContent = task.text;
      newTask.appendChild(taskText);
      addTools(newTask);
      ulList.append(newTask);
      if (task.completed) {
        newTask.classList.add("completed");
      }
    });
  }
};
document.addEventListener("DOMContentLoaded", main);

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  if (container) {
    container.classList.add("slide-in");
  }
});
