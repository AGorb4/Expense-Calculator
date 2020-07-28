var takeHomePay = 0;

const updateTakeHomePay = async () => {
  takeHomePayInput = document.getElementById("takeHomePayInput");
  takeHomePay = takeHomePayInput.value;
  if (document.getElementById("expenseList").childElementCount > 0) {
    document.getElementById("expenseList").childNodes.forEach((element) => {});
  } else {
    updateRemainingAmount(takeHomePay);
  }
};

document.getElementById("newExpenseForm").onsubmit = function () {
  let expenseName = document.getElementById("expenseName").value;
  let expenseAmount = document.getElementById("expenseAmount").value;
  addNewExpenseElement(expenseName, expenseAmount);
  return false;
};

const addNewExpenseElement = (expenseName, expenseAmount) => {
  //main li
  var li = document.createElement("li");
  li.id = expenseName + "-Card";

  //parent card div
  var cardDiv = document.createElement("div");
  cardDiv.className = "card";
  //card body
  var cardBody = document.createElement("div");
  cardBody.className = "card-body";
  //card title (holds expense name)
  var cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = expenseName;
  cardBody.appendChild(cardTitle);

  //card text (holds expense amount)
  var cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = expenseAmount;
  cardBody.appendChild(cardText);

  //card button to remove card
  var cardButton = document.createElement("button");
  cardButton.className = "btn btn-danger";
  cardButton.textContent = "Remove";
  //remove element function
  cardBody.onclick = function () {
    li.childNodes[0].childNodes[0].childNodes.forEach((elem) => {
      if (elem.className == "card-text") {
        var amount = parseInt(elem.textContent);
        takeHomePay = takeHomePay + amount;
        updateRemainingAmount(takeHomePay);
      }
    });
    document.getElementById("expenseList").removeChild(li);
  };

  cardBody.appendChild(cardButton);
  cardDiv.appendChild(cardBody);
  li.appendChild(cardDiv);

  document.getElementById("expenseList").appendChild(li);
  takeHomePay = takeHomePay - expenseAmount;
  updateRemainingAmount(takeHomePay);
  clearInputFields();
};

const updateRemainingAmount = (amount) => {
  document.getElementById("amountLeft").textContent = amount;
};

const clearInputFields = () => {
  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
};
