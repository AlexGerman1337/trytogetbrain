'use strict';




 let start1 = document.getElementById('start'), //a
     btnPlus = document.getElementsByTagName('button'),
     incomePlus = btnPlus[0],
     expensesPlus = btnPlus[1],
     depositButton = document.querySelector('#deposit-check'), // c
     additionalIncome = document.querySelectorAll('.additional_income'), //d
     resultBudgetDay = document.querySelector('.result-budget_day'), //e
     resultExpensesMonth = document.querySelector('.result-expenses_month'),
     resultAdditionalIncome = document.querySelector('.result-additional_income'),
     resultAdditionalExpenses = document.querySelector('.result-additional_expenses'),
     resultIncomePeriod = document.querySelector('.result-income_period'),
     resultTargetMonth = document.querySelector('.result-target_month'),
     main = document.querySelector('.main'), //f
     incomeItems = document.querySelectorAll('.income-items'),
     incomeTitle = document.querySelector('.income-title'),
     salaryAmount = document.querySelector('.salary-amount'),
     incomeAmount = document.querySelector('.income-amount'),
     expensesAmount = document.querySelector('.expenses-amount'),
     expensesItems = document.querySelectorAll('.expenses-items'),
     additionalExpensesItem = document.querySelector('.additional_expenses-item'),
     additionalExpensesTitle = document.querySelector('.additional_expenses-title'),
     targetAmount = document.querySelector('.target-amount'),
     periodSelect = document.querySelector('.period-select'),
     periodTitle = document.querySelector('.period-title'),
     periodAmount = document.querySelector('.period-amount'),
     budgetMonthValue =  document.getElementsByClassName('budget_month-value')[0],
     budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
     expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
     accumulateMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
     additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
     additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
     additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
     incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
     targetMonthValue = document.getElementsByClassName('target_month-value')[0],
     canselButton = document.getElementById('cancel'),
     depositAmount = document.querySelector('.deposit-amount'),
     depositPersent = document.querySelector('.deposit-percent');




let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let isString = function(n){
    return String(n) && n === null && isString.trim();
}
// добавил функцию аналогичную isNumber для удобства


const appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    incomeMonth:0,
    deposit: false,
    persentDeposit: 0,
    moneyDeposit: 0,
    period: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    start: function() {
      
        appData.budget = +salaryAmount.value;
        appData.getExpenses();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getexpensesMonth();
        this.getIncome();
        console.log(this);
        appData.getBudget();
        appData.showResult();

     
    
        
    },
    showResult:function(){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
        
    },





    addExpensesBlock:function(){
        
        let cloneExpensesItem = expensesItems[0].cloneNode(true); // глубокая копия
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
        expensesPlus.style.display = 'none';
        }
     },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = +item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !==''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
     addIncomeBlock:function(){
        
        let cloneIncomeItem = incomeItems[0].cloneNode(true); // глубокая копия
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
        incomePlus.style.display = 'none';
        }
     },
    getIncome: function(){
        incomeItems.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = +item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !==''){
                appData.income[itemIncome] = cashIncome;
            }
            for(let key in  appData.income){
                appData.incomeMonth += appData.income[key];
            }
        });
    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome:function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });
    },
    
    setPeriod:function(event){
        this.period = event.target.value;
        periodAmount.value = event.target.value;
        periodAmount.textContent = event.target.value;
    },

    getexpensesMonth: function() {
       
        for (let key in appData.expenses){

            this.expensesMonth += this.expenses[key];
        }

     
    },

    getBudget: function(){
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    
    getTargetMonth: function(){
        let a = +Math.floor(targetAmount.value / appData.budgetMonth);
    },

    getStatusIncome: function(){
        if(this.budgetDay > 1200){
            console.log('у вас высокий уровень дохода');
        }
        else if(600 <= appData.budgetDay){
            console.log('у вас средний уровень дохода');
        }
        else if(0 < appData.budgetDay){
            console.log('к сожалению ваш уровень дохода ниже среднего');
        }
        else{
            console.log('что-то пошло не так');
        }
    },
    
    message: function() {
        for(let key in this){
            console.log("Наша программа включает в себя данные: " + key + " - " + this[key]);
    }
   
    },

    getInfoDeposit: function (){
        if(this.deposit){
            do{
            this.persentDeposit - prompt('Какой годовой процент', 10);
            }
            while (!isNumber(this.persentDeposite));
            do{
            this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }
            while (!isNumber(this.moneyDeposit));
        }
    },
    calcPeriod: function () {
        return this.budgetMonth * periodSelect.value;
    },



    

};

start1.addEventListener('click', function(){
    if(salaryAmount.value === ''){
        event.stopImmediatePropagation();
    
}
});







start1.addEventListener('click', appData.start.bind(appData));

expensesPlus.addEventListener('click',appData.addExpensesBlock);
incomePlus.addEventListener('click',appData.addIncomeBlock);
document.querySelector('.period-select').addEventListener('change', appData.setPeriod);





// appData.getTargetMonth();
// appData.getStatusIncome();
// appData.message();
