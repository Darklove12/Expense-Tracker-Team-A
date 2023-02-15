let transaction = {

  income: 0,
  expense: 0,
  balance: 0,
  transactions: [],
}

function Display(){
  calculate()

  let displayIncome = document.getElementById('income');
  displayIncome.innerHTML = transaction.income

  let displayExpense = document.getElementById('expense');
  displayExpense.innerHTML = transaction.expense

}