function goToCalculator() {
  window.location.href =
    "https://mateuszmlodecki.github.io/didactic-potato/calculator/index.html";
}
function goToToDoList() {
  window.location.href =
    "https://mateuszmlodecki.github.io/didactic-potato/todo-list/index.html";
}

const folding = document.querySelectorAll(".folding");
folding.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("folding-expanded");
  });
});

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
