let balance = document.getElementById('balance');
let money_high = document.getElementById('money-high');
let money_less = document.getElementById('money-less');
let list_all = document.getElementById('list-add');
let form = document.getElementById('form');
let text = document.getElementById('text');
let amount = document.getElementById('amount');

const localStorageTransactions = JSON.parse(
    localStorage.getItem('transactions')
  );
  
  

