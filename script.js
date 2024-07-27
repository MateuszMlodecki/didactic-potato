function goToToDo() {
  window.location.href = "todo-list/index.html";
}
function goToCalculator() {
  window.location.href = "calculator/index.html";
}
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkModeToggle");
  toggle.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  });
});
