let balance = document.getElementById('balance');
let money_high = document.getElementById('money-high');
let money_less = document.getElementById('money-less');
let list_all = document.getElementById('list-add');
let form = document.getElementById('form');
let text = document.getElementById('text');
let amount = document.getElementById('amount');

let localStorageTransactions = JSON.parse(
    localStorage.getItem('transactions')
  );
  
  display()
  
  let transactions =
    localStorage.getItem('transactions') !== null ? localStorageTransactions : [];
  
  // Add transaction in function()
  function addTransaction() {
  
    if (text.value === '' || amount.value === '') {
      alert('Please add a text and amount');

    } 
    else
    {
        let transaction = {
          id: addID(),
          text: text.value,
          amount: +amount.value
        };

        transactions.push(transaction);
      }
    
    }

