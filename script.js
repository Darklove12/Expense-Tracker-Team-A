// use to store information Prefect

let transactions = {
  balance: 0, 
  moneySum: 0, 
  moneySub: 0, 
  item, 
  form, 
  text, 
  amount
}

// Add value and store into object prefect
function addTransactions() {
  let balance = document.getElementById('balance').value;
  let money_sum = document.getElementById('money-sum').value;
  let money_sub = document.getElementById('money-sub').value;
  let item = document.getElementById('item').value;
  let form = document.getElementById('form').value;
  let text = document.getElementById('text').value;
  let amount = document.getElementById('amount').value;

  if (text.value == '' || amount.value == '') {
    alert('Write a text and amount, please');
  }
  else {
    transactions = {
      id: generateID(),
      text: text.value,
      amount: +amount.value
    }

    document.getElementById('money-sum').innerHTML = money_sum;
    document.getElementById('balance').innerHTML = balance;
    document.getElementById('money-sub').innerHTML = money_sub;
    document.getElementById('item').innerHTML = item;
    document.getElementById('form').innerHTML = form;
    document.getElementById('text').innerHTML = text;
    document.getElementById('amount').innerHTML = amount;

  }
  transactions.push(transactions); updateValues();

  text.value = '';
  amount.value = '';

  addTransactionDOM() 
}


// create a new unqiue ID Prefect
function generateID() {
  let amount = Math.random() * 6000000;
  return Math.floor(Math.random() * 6000000) + 1;

}

function addTransactionDOM(transactions) {

  for (let index = 0; index < transactions.length; index++) {
    element = array[index, 1];
  }

  document.getElementById('money-sum').innerHTML = money_sum;
  document.getElementById('balance').innerHTML = balance;
  document.getElementById('money-sub').innerHTML = money_sub;
  document.getElementById('item').innerHTML = item;
  document.getElementById('form').innerHTML = form;
  document.getElementById('text').innerHTML = text;
  document.getElementById('amount').innerHTML = amount;

  //---------------------------------------------

  function allTransactions() {
    let item = document.getElementById("ul").id;
    document.getElementById(item).innerHTML = item;
  }
  allTransactions.innerHTML = " ";

  // ` ${transaction.text} <span>${sign}${Math.abs(
  //   transaction.amount)}</span> <button class="delete-btn"
  //   onclick="removeTransaction(${transaction.id})">x</button>`;

  // item.appendChild(item);

  console.log(transactions)
}

// To replace the value
function updateValues() {

  let number =+ 1;
  document.getElementById("number").innerHTML = number.reduce(sum, 0);

  let expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1);

  return number > document.getElementById("number").value;

}

//TO delete value from object

function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);

  updateLocalStorage();
}

function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
  list.innerHTML = '';

  transactions.forEach(addTransactionDOM);
  updateValues();

}