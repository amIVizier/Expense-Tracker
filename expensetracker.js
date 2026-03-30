'use strict';

const addTransaction   =  document.querySelector('.addtransaction');
let allBalanceValue = document.querySelector('.balancevalue')

//. Each object should have properties like name, amount, and category.

const expense = {
    amount: 0,
    category : [
    'Food and Dining', 
    `Transporatation`,
    `Shopping`,
    `Entertainment`,
    `Bills and Utilities`, 
    `Healthcase` , 
    `Education`,
    `Travel`] ,

          record:[ ],

      // well use method to be cleaner 

//          expense.record.push(`${category}: ${amount}`); ;
//    expense.amount += amount ; 
//    allExpenses.textContent = expense.amount  ;

}

const income = {
     amount: 0,
     category : [`Salary`,`Freelance`, `Investment`],   
     
          record:[ ]

}

const promptAddTrans =  function () {
const chooseExporIncome = prompt('Expense or Income') 

// need to be 1 by 1 one with expnse or income 
if( chooseExporIncome === "Expense"){
   const category = prompt(`Category:${expense.category}`) ;
   const amount = Number(prompt(`How much?`)) ;

   // this is on the amount on total expenses
   let  allExpenses  = document.querySelector('.expensesvalue');
   const transaction = document.querySelector('.transaction ')

   expense.record.push(`${category}: ${amount}`); ;
   expense.amount += amount ; 


   allExpenses.textContent = expense.amount  ;

    let addTransaction = document.createElement('div');
    addTransaction.className = 'sample';
    addTransaction.textContent = `Category :${category}:  Amount : ${amount}`;
    transaction.appendChild(addTransaction);
//     console.log(expense);

    // adding the balance value 

    allBalanceValue.textContent = income.amount - expense.amount


}
else if( chooseExporIncome === "Income") {
  
   const category = prompt(`Category:${income.category}`) ;
   const amount = Number(prompt(`How much?`)) ;

    let  allIncome  = document.querySelector('.incomevalue');
   const transaction = document.querySelector('.transaction ')
   
     income.record.push(`${category}: ${amount}`); ;
     income.amount += amount ; 
     allIncome.textContent = income.amount  ;

    let addTransaction = document.createElement('div');
    addTransaction.className = 'sample';
    addTransaction.textContent = `Category :${category}:  Amount : ${amount}`;
    transaction.appendChild(addTransaction);
   console.log(income);

     allBalanceValue.textContent = income.amount - expense.amount

}else{
     console.log(`Select Income and Expense only`);
}

}

addTransaction.addEventListener('click',promptAddTrans);


