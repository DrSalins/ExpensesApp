let income = 0;
let expenses = 0;
let incomeValueDisp = document.querySelector(".incomeValue");
let expensesValueDisp = document.querySelector(".expensesValue");
let incomeAmt = prompt("What is your income?");
income = Number(incomeAmt);
console.log(income);
incomeValueDisp.innerHTML = "$" + income;
let expenseButton = document.querySelector(".expenseButton");
let expensesName = document.querySelector(".expensesNameInput");
let expensesValue = document.querySelector(".expensesValueInput");
let cat = document.querySelector("#Categories");
function onChange() {
  let value = cat.value;
  let text = cat.options[cat.selectedIndex].text;
  console.log(value, text);
}
cat.onchange = onChange;
onChange();
expenseButton.addEventListener("click", (event) => {
  let mainDiv = document.querySelector(".expensesSmall");
  event.preventDefault;
  let newExpense = Number(expensesValue.value);
  expenses = Number(newExpense + expenses);
  expensesValueDisp.innerHTML = "$" + expenses;
  let remaining = income - expenses;
  incomeValueDisp.innerHTML = "$" + remaining;
  const span1 = document.createElement("span");
  span1.className = "expNameDisp";
  span1.innerHTML = expensesName.value;
  const span2 = document.createElement("span");
  span2.className = "expValueDisp";
  span2.innerHTML = "$" + Number(expensesValue.value);
  const span3 = document.createElement("span");
  span3.className = "expCategoryDisp";
  span3.innerHTML = cat.options[cat.selectedIndex].text;
  const container = document.createElement("div");
  container.className = "expContainer";
  container.appendChild(span1);
  container.appendChild(span2);
  container.appendChild(span3);
  mainDiv.appendChild(container);
  if (remaining <= 0.5 * income) {
    alert("You are reaching 50% of your income! Please start saving!");
    incomeValueDisp.style.color = "red";
  } else {
    incomeValueDisp.style.color = "green";
  }
});
