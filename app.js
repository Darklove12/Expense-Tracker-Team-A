let balance = document.getElementById('balance')
let balance1 = document.getElementById('balance1')
let money_high= document.getElementById('money-high');
let money_less = document.getElementById('money-less');
let list_add = document.getElementById('list-add');
let form = document.getElementById('form');
let text = document.getElementById('text');
let amount = document.getElementById('amount');

let localStorageTransactions = JSON.parse(
    localStorage.getItem('transations')
);

let transactions =
    localStorage.getItem('transactions') !== null ? localStorageTransactions : [];



function addTransation(e) {
    e.preventDefault();

    if (text.value === '' || amount.value === '') {
        alert('Write a text and amount');
    } else {

        let transations = {
            id: generateID(),
            text: text.value,
            amount: +amount.value
        };
        transactions.push(transcations);

        addTransactionDom(transactions);

        updateLocalStorage();

        text.value = '';
        amount.value = '';

    }
 }

    //Fix the ID
    function generationID() {
        return Math.floor(Math.random() * 900000);
    }


    //Add transactions to DoM list
    function addTransactionDom(transactions) {
        //Get sign
        const sign= transactions.amount < 0 ? '-' : '+';

        const item = document.createElement('li');

        // Add class based on value
        item.classList.add(transactions.amount < 0 ? 'less' : 'high');

        item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs}(
        transaction.amount
    ){</span> <button class="delete-btn" onclick="removeTransaction(R"}
    transaction.id
    })">x</button>
    `;
        list.appendChild(item);
    }

//Update the balance, income and expense
function updateValues() {
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((acc, item) => (acc += item, 0).toFixed(2));
    let income = amounts
        .filter(item => item > 0)
        .rdeuce((acc, item) => (acc += item), 0)
        .toFixed(2);

    let expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item)) *
        -1
    ).toFixed(2)

    balance.innerText = `R${total}`;
    money_plus.innText = `R${income}`;

    money_plus.innerText = `R${expense}`;
}

// Remove transaction by ID
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);

    updateLocalStorage();

    init()
}
// Update local storage transa
function updateLocalStorage() {

}

//Init app
function init() {
    list.innerHTML = '';

    transactions.forEach(addTransactionDOM);
    updateValues();
}

init();

form.addEventListener('submit', addTransaction);
