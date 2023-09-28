const counterValue = document.getElementById("value");
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

let currentValue = 0;

decrementButton.addEventListener("click", () => {
  currentValue -= 1;
  updateCounterValue();
});

incrementButton.addEventListener("click", () => {
  currentValue += 1;
  updateCounterValue();
});

function updateCounterValue() {
  counterValue.textContent = currentValue;
}