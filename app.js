let balance = document.getElementById('balance')
let money_plus = document.getElementById('money-plus');
let money_minus = document.getElementById('money-minus');
let list =document.getElementById('list');
let form =document.getElementById('form');
let text =document.getElementById('text');
let amount =document.getElementById('amount');

let localStorageTransactions = JSON.parse
localStorageTransactions.getItem('transations') !== null ? localStorageTransactions : [];
// Add transations

