const displayBalance = document.getElementById("displayBalance");
displayBalance.textContent = `Your Account balance is ${getVal}`;
console.log(getVal);

var mainBalance = 0;

function updateBalance() {
  let currBalance = parseInt(getValue("balance"));
  const newAmount = document.getElementById("depositMoney").value;
  currBalance += parseInt(newAmount);

  setValue("balance", currBalance);
  location.reload();
  const displayBalance = document.getElementById("displayBalance");
  if (displayBalance) {
    displayBalance.textContent = `Your Account balance is ${mainBalance}`;
  }
  document.getElementById("main_div").style.display = "block";
  document.getElementById("add_money").style.display = "none";
  document.getElementById("depositMoney").value = 0;
}

function onAddMoney() {
  document.getElementById("main_div").style.display = "none";
  document.getElementById("add_money").style.display = "block";
}
