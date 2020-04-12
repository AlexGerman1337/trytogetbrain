'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
}

let isString = function(n){
    return String(n) && n === null && isString.trim();
}
// добавил функцию аналогичную isNumber для удобства
let money;
let start = function() {
        do {
            money = prompt('Ваш месячный доход?');
            
        } while (!isNumber(money));
    };
start();

const appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    persentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 18,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
        let cashIncome = 0;
        let itemIncome;

        if(confirm('Есть ли у вас дополнительный источник заработка?')){
            do {
            itemIncome = prompt('Какой у вас дополнительный доход?', 'вебкам');
            // itemIncome = itemIncome.trim();
            // itemIncome = itemIncome.replace(/^\s*/,'').replace(/\s*$/,'');
            }
            while(isString(itemIncome) || itemIncome === ''|| itemIncome === null || itemIncome === ' ');
            do{
            cashIncome = prompt('Сколько в месяц  вы на этом зарабатываете', 10);
            }
            while (!isNumber(cashIncome));
            appData.income[itemIncome] = cashIncome;
        }
       
      appData.addExpenses = prompt('Перечислите возможные расходы через запятую?');

      function uppercase() {
        appData.addExpenses = appData.addExpenses.split(',');
          let newarray = [];
          for(let x = 0; x < appData.addExpenses.length; x++){
              newarray.push(appData.addExpenses[x].charAt(0).toUpperCase()+appData.addExpenses[x].slice(1));
      }
      return newarray.join(', ');
      }
      console.log(uppercase(appData.addExpenses));

      let sum;
      let str = {};
          for (let i = 0; i < 2; i++){
            do{
            str[i] = prompt('Введите обязательную статью расходов', ' вода из под крана');
           // str[i] = str.replace(/^\s*/,'').replace(/\s*$/,'');
            }
            while(isString(str) || str === '');
            do {
            sum = +prompt(' Во сколько это обойдется?', 200); 
            }
            while (!isNumber(sum));
            console.log(appData.expenses);
     }
    
 },


    getexpensesMonth: function() {
       
        for (let key in appData.expenses){

            appData.expensesMonth += appData.expenses[key];
        }

        console.log("Сумма всех расходов: " + appData.expensesMonth);
    },

    getBudget: function(){
        
        appData.budgetMonth = money - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
        if(appData.budgetMonth <=0){
            console.log("Накопления за месяц и ежедневный бюджет отсутствуют!");
        }else{
            console.log('Месячный бюджет:' + appData.budgetMonth);
            console.log('Ежедневный бюджет: ' + appData.budgetDay);
            
        }

    },
    
    getTargetMonth: function(){
        let a = 0;
        a = Math.floor(appData.mission / appData.budgetMonth);
        if(appData.budgetMonth <=0){
            console.log("Цель не будет достигнута.");
        }else{
            console.log("Цель будет достигнута за " + a + " месяцев");
        }

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
    calcSaveMoney: function () {
        return appData.persentDeposit * appData.period;
    }
  

};
   

appData.asking(),
appData.getexpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.message();
