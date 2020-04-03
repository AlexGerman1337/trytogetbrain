'use strict';

let money = +prompt("Ваш месячный доход ?"),
  income = 'нет дополнительного дохода',
  misson = 15000,
  deposit = confirm('Есть ли у вас депозит в банке?');

let showTypeOf = function(data){
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(misson); 

let expenses1 = prompt("Введите обязательную статью расходов"),
  amount1 = +prompt("Во сколько это обойдется?"),
  expenses2 = prompt("Введите обязательную статью расходов"),
  amount2 = +prompt("Во сколько это обойдется?"),
  allAmount =(parseInt(amount1) + parseInt(amount2)),    
  dayPerMonth = 30;
//  добавил условные дни в месяце для удобства

function getExpensesMonth(amount1, amount2){
    return amount1 + amount2;
}
console.log('Сумма всех обязательных расходов за месяц:', getExpensesMonth(amount1, amount2));

function getAccumulatedMonth(money, allAmount){
    return money - allAmount;
}
console.log('Накопления за месяц:', getAccumulatedMonth(money, allAmount));


let accummulatedMonth = getAccumulatedMonth(money, allAmount);
console.log('Накопления за месяц 2:', accummulatedMonth);


function getTargetMonth(misson, accummulatedMonth){
    return Math.floor(misson / accummulatedMonth);
}
console.log('Цель будет достигнута за:', getTargetMonth(misson, accummulatedMonth));

let budgetDay = accummulatedMonth / dayPerMonth;
console.log('Ежедневный бюджет:', budgetDay);

let getStatusIncome = function() {
if(budgetDay > 1200){
    return('у вас высокий уровень дохода');
}
else if(600<=budgetDay){
    return('у вас средний уровень дохода');
}
else if(0<=budgetDay){
    return('к сожалению ваш уровень дохода ниже среднего');
}
else{
    return('что-то пошло не так');
}
};

console.log(getStatusIncome());



