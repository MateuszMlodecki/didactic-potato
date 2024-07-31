function goToHome() {
  window.location.href = "../index.html";
}
const display = document.getElementById("display");

function appendToDisplay(input) {
  if (display.value === "" && ["*", "/", "."].includes(input)) {
    return;
  }
  if (
    ["*", "/", ".", "+", "-"].includes(display.value.slice(-1)) &&
    ["*", "/", ".", "+", "-"].includes(input)
  ) {
    return;
  }
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  display.value = eval(display.value);
}
