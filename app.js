const reasonInput = document.querySelector('#input-reason');
const reasonAmount = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expense-list');
const totalExpensesValue = document.querySelector('#total-expense');

let totalExpense = 0;
const clear = () => {
    reasonAmount.value = '';
    reasonInput.value = '';
};

cancelBtn.addEventListener('click', ()=> {
    clear();
});

confirmBtn.addEventListener('click', ()=> {
    const enteredAmount = reasonAmount.value;
    const enteredReason = reasonInput.value;
    if (enteredReason.trim().length <= 0 
    || enteredAmount <= 0 
    || enteredAmount.trim().length <= 0) {
        const alert = document.createElement('ion-alert');
        alert.header = 'Invalid Inputs';
        alert.message = 'Please provide valid amount and expense.';
        alert.buttons = ['OK'];
      
        document.body.appendChild(alert);
        return alert.present();
    }
    totalExpense += +enteredAmount;
    totalExpensesValue.textContent = totalExpense;
    const newItem = document.createElement('ion-item');
    newItem.textContent = `${enteredReason} : $ ${enteredAmount}`;
    expensesList.appendChild(newItem);
    clear();
});