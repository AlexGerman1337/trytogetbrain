'use strict';




 let calculateButton = document.getElementById('start'), //a
 
     incomeButton = document.getElementsByTagName('button')[0], //b
     expensesButton = document.getElementsByTagName('button')[1], 

     depositButton = document.querySelector('#deposit-check'), // c

     additionalIncome = document.querySelectorAll('.additional_income'), //d


     resultBudgetDay = document.querySelector('.result-budget_day'), //e
     resultExpensesMonth = document.querySelector('.result-expenses_month'),
     resultAdditionalIncome = document.querySelector('.result-additional_income'),
     resultAdditionalExpenses = document.querySelector('.result-additional_expenses'),
     resultIncomePeriod = document.querySelector('.result-income_period'),
     resultTargetMonth = document.querySelector('.result-target_month'),
    
     main = document.querySelector('.main'), //f
     incomeTitle = document.querySelector('.income-title'),
     salaryAmount = document.querySelector('.salary-amount'),
     incomeAmount = document.querySelector('.income-amount'),
     expensesAmount = document.querySelector('.expenses-amount'),
     additionalExpensesItem = document.querySelector('.additional_expenses-item'),
     additionalExpensesTitle = document.querySelector('.additional_expenses-title'),
     targetAmount = document.querySelector('.target-amount'),
     period = document.querySelector('.period-select'),
     periodTitle = document.querySelector('.period-title'),
     periodAmount = document.querySelector('.period-amount'),
     resultTotalBudgetMonth = document.querySelector('.budget_month-value'),
     canselButton = document.getElementById('cancel'),
     depositAmount = document.querySelector('.deposit-amount'),
     depositPersent = document.querySelector('.deposit-percent');














     console.log(calculateButton);
     console.log(incomeButton);
     console.log(expensesButton);
     console.log(depositButton);
     console.log(additionalIncome);
     console.log(resultBudgetDay);
     console.log(resultExpensesMonth);
     console.log(resultAdditionalIncome);
     console.log(resultAdditionalExpenses);
     console.log(resultIncomePeriod);
     console.log(resultTargetMonth);
     console.log(main);
     console.log(incomeTitle);
     console.log(salaryAmount);
     console.log(incomeAmount);
     console.log(expensesAmount);
     console.log(additionalExpensesItem);
     console.log(additionalExpensesTitle);
     console.log(targetAmount);
     console.log(period);
     console.log(resultTotalBudgetMonth);
     console.log(canselButton);
     console.log(depositAmount);
     console.log(depositPersent);
     console.log(periodTitle);
     console.log(periodAmount);
// в макете не нашел кнопки сбросить, процент и сумму. в упор не вижу их, надеюсь так и было задуманно
