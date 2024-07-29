function goToToDo() {
  window.location.href = "todo-list/index.html";
}
function goToCalculator() {
  window.location.href = "calculator/index.html";
}
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkModeToggle");
  const darkModeEnabled = localStorage.getItem("dark-mode") === "true";

  toggle.checked = darkModeEnabled;
  if (darkModeEnabled) {
    document.body.classList.add("dark-mode");
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("dark-mode", "false");
    }
  });
});
