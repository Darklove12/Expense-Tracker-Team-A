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
    else {
      style = 'red'
    }

    displayTransactions.innerHTML +=

    <table>
       <tr class="tr_tran" id="${style}">
       <td class="tr_tran">${i + 1}</td>
       <td class="tr_tran">${transaction.transactions[i].detail}</td>
       <td class="tr_tran">R${transaction.transactions[i].amount}</td>
       <td class="tr_tran"><button onclick="remove(${i})"><i class="bi bi-trash3"></i></button></td>
       </tr>
    </table>
  }
}

function addTransaction(type){
  let detail = document.getElementById('detail')
  let amount = document.getElementById('amount')

  if (detail.value == '' || amount.value == ''){
    alert('Write your detail and amount, please.')
  }

  else{
    let id = Math.floor(Math.random() * 10000000)
    transaction.transactions.push({
      detail: detail.value,
      amount: amount.value,
      id: id,
      type: type
    })

    Display()

    detail.value = ''
    amount.value = ''
  }
  saveData()
}

function calculate(){
  let income = 0;
  let expense = 0;
  let balance = 0;

  for (let i = 0; i < transaction.transactions.length; i++){

    if (transaction.transactions[i].type == 'income'){
      income += Number(transaction.transactions[i].amount)
    }

    if (transaction.transactions[i].type == 'expense'){
      expense += Number(transaction.transactions[i].amount)
    }
  }

  balance = Number(income) - Number(expense)

  transaction.income = income
  transaction.expense = expense
  transaction.balance = balance
  saveData()
}

function remove (index){
  transaction.transactions.splice(index, 1)

  Display()
  saveData()
}

function saveData(){
  let stateToString = JSON.stringify(transaction)
  localStorage.setItem('transaction', stateToString)
}

function getData(){
  if (localStorage.getItem('transaction')){
    let dataFromLocalStorage = localStorage.getItem('transaction')
    transaction = JSON.parse(dataFromLocalStorage)
  }
}