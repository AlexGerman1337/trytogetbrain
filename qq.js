'use strict';




 let start = document.getElementById('start'), //a
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
        appData.getIncome();
        appData.getBudget();
        appData.showResult();
        
    },
    showResult:function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod();
        
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
        appData.period = event.target.value;
        periodAmount.value = event.target.value;
        periodAmount.textContent = event.target.value;
    },
     // и тут я понял что не зря сидел и конспектировал 2 последних твоих видео
    //  пусть на это и уходило куча времени
    
 


    getexpensesMonth: function() {
       
        for (let key in appData.expenses){

            appData.expensesMonth += appData.expenses[key];
        }

        // console.log("Сумма всех расходов: " + appData.expensesMonth);
    },

    getBudget: function(){
        
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
        // if(appData.budgetMonth <=0){
        //     console.log("Накопления за месяц и ежедневный бюджет отсутствуют!");
        // }else{
        //     console.log('Месячный бюджет:' + appData.budgetMonth);
        //     console.log('Ежедневный бюджет: ' + appData.budgetDay);
            
        // }

    },
    
    getTargetMonth: function(){
        let a = +Math.floor(targetAmount.value / appData.budgetMonth);
        
        if(isNumber(a)){
            resultTargetMonth.textContent = 'Срок';
        }else{
            return a;
        }
  
        // не понимаю почему этот костыль не работает
    },

    getStatusIncome: function(){
        if(appData.budgetDay > 1200){
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
        for(let key in appData){
            console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
    }
   
    },

    getInfoDeposit: function (){
        if(appData.deposit){
            do{
            appData.persentDeposit - prompt('Какой годовой процент', 10);
            }
            while (!isNumber(appData.persentDeposite));
            do{
            appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }
            while (!isNumber(appData.moneyDeposit));
        }
    },
    calcPeriod: function () {
        return appData.budgetMonth * periodSelect.value;
    },



    

};

start.addEventListener('click', function(){
    if(salaryAmount.value === ''){
    event.preventDefault(start);
    
}
});


start.addEventListener('click', appData.start);



expensesPlus.addEventListener('click',appData.addExpensesBlock);
incomePlus.addEventListener('click',appData.addIncomeBlock);
document.querySelector('.period-select').addEventListener('change', appData.setPeriod);

// /start();

// appData.getTargetMonth();
// appData.getStatusIncome();
// appData.message();
