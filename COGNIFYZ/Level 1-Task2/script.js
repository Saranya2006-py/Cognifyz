// Color changer
document.addEventListener("DOMContentLoaded", () => {
  const colorBtn = document.getElementById("colorBtn");
  if (colorBtn) {
    colorBtn.addEventListener("click", () => {
      const newColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
      colorBtn.style.backgroundColor = newColor;
    });
  }

  const greetEl = document.getElementById("greetingMessage");
  if (greetEl) showGreeting(false);
});

function showGreeting(showAlert) {
  const hour = new Date().getHours();
  const message = hour < 12 ? "Good Morning ☀️" : hour < 18 ? "Good Afternoon 🌤️" : "Good Evening 🌙";
  const greetEl = document.getElementById("greetingMessage");
  if (greetEl) greetEl.textContent = message;
  if (showAlert) alert(message);
}

function calculateSum() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const resultEl = document.getElementById("calcResult");

  if (isNaN(n1) || isNaN(n2)) {
    resultEl.textContent = "Result: Please enter valid numbers.";
    resultEl.classList.add("text-red-500");
  } else {
    resultEl.textContent = `Result: ${n1 + n2}`;
    resultEl.classList.remove("text-red-500");
  }
}
