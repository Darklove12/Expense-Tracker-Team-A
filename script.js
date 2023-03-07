// Create the value and transaction

let transaction = {
  income , expense, balance , transactions:[]
}

display()


// To function display transaction in HTML

function display(){
  calculate()


  // To get the ID information

  let income = document.getElementById('income')
  income.innerHTML = transaction.income

  let expense = document.getElementById('expense')
  expense.innerHTML = transaction.expense

  

  let displayTransactions = document.getElementById('transactions')
  displayTransactions.innerHTML = ''


  // To fix the transactions ID and display for Loop

  for (let i = 0; i < transaction.transactions.length; i++) {
    let style = ''

    if (transaction.transactions[i].type == 'income') {
      style = 'green'
    }
    else {
      style = 'red'
    }


    // Create style

    displayTransactions.innerHTML += `

    <table>
       <tr class="tr_tran" id="${style}">
       <td class="tr_tran">${i + 1}</td>
       <td class="tr_tran">${transaction.transactions[i].detail}</td>
       <td class="tr_tran">R${transaction.transactions[i].amount}</td>
       <td class="tr_tran"><button onclick="remove(${i})"><i class="bi bi-trash3"></i></button></td>
       </tr>
    </table>
    `
  }
}

// Add transaction

function addTransaction(type){
  let detail = document.getElementById('detail')
  let amount = document.getElementById('amount')

  if (detail.value == '' || amount.value == ''){
    alert('Enter your detail and amount, please.')
      
  }

  else{
    let id = Math.floor(Math.random() * 30000000)
    transaction.transactions.push({
      detail: detail.value,
      amount: amount.value,
      id: id,
      type: type,
    })

    display()

    detail.value = ''
    amount.value = ''
  }
  saveData()

  
}

// Do a calculate

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


// Put function array by removing or replacing existing elements in place

function remove (getItem){
  transaction.transactions.splice(getItem,1)

    // Display

  display()
  saveData()
}

// Save the data

function saveData(){
  let transactionToString = JSON.stringify(transaction)


// Add the data to localstorage

localStorage.setItem('transaction', transactionToString)
  
}

// The data gets out of localstorage

function getData(){
  if (localStorage.getItem(`transaction`)){
    let dataFromLocalStorage = localStorage.getItem(`transaction`)
    transaction = JSON.parse(dataFromLocalStorage)
  }
}
