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

  let displayBalance = document.getElementById('balance');
  displayBalance.innerHTML = transaction.balance

  let displayTransactions = document.getElementById('transactions')
  displayTransactions.innerHTML = ''

  for (let i = 0; i < transaction.transactions.length; i++) {
    let style = ''

    if (transaction.transactions[i].type == 'income') {
      style = 'green'
    }
  }
}

