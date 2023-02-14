// use to store information

let transactions = {
  balance : 0,
  money:0,
  moneySum:0,
  moneySub:0,
  item,
  form,
  text,
  amount
}
// add value into the object 

function addTransactions() 
{
  let balance = document.getElementById('balance').value;
  let money_sum = document.getElementById('money-sum').value;
  let money_sub = document.getElementById('money-sub').value;
  let item = document.getElementById('item').value;
  let form = document.getElementById('form').value;
  let text = document.getElementById('text').value;
  let amount = document.getElementById('amount').value;
  if (text.value == '' || amount.value == '') {
    alert('write a text and amount, please');
  }
  else{
    transactions = {
      id: generateId(),
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
}
