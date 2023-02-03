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
function addTransation(e){
    e.preventDefault();
}
if (text.value.trim() ==='' || amount.value.trim()===''){
alert('please add a text and amount');
}else {

    let transations={
        id: generateID(),
        text: text.value,
        amount: +amount.value
    };
    transactions.push(transcations);

    addTransactionDom(transactions);

    updateValues();

    updateLocalStorage();

    text.value = '';
    amount.value = '';

}
{
    //Generate random ID
    function generationID(){
        return Math.floor(Math.random() * 100000000);
    }
    
}
{
    //Add transactions to DoM list
    function addTransactionDom(transactions){
    //Get sign
    const item = transactions.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    // Add class based on value
    item.classList.add(transactions.amount < 0 ? 'minus' : 'plus');

    }
}

