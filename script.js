
let money = 10000;
let income = 25000;
let addExpenses = "brain";
let deposit = 29900;
let misson = 150000;
let period = "60 days";


money = prompt("Ваш месячный доход ?");
addExpenses  = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
deposit = confirm("Есть ли у вас депозит в банке?");


console.log( money );
console.log(addExpenses);
console.log(deposit);


let expenses1 = prompt("Введите обязательную статью расходов");
let amount1 = prompt("Во сколько это обойдется?");
let expenses2 = prompt("Введите обязательную статью расходов");
let amount2 = prompt("Во сколько это обойдется?");
console.log('Расходы1: ', expenses1 );
console.log('Стоимость1: ', amount1 );
console.log('Расходы2: ', expenses2);
console.log('Стоимость2 : ', amount2 );


let allAmount =(parseInt(amount1) + parseInt(amount2));
console.log('Все расходы:' , allAmount);
let budgetMonth = (parseInt(money) - parseInt(allAmount));
console.log('Бюджет на месяц: ', budgetMonth);

    
let missonComplete = misson / budgetMonth;
console.log('Цель будет достигнута за: ', Math.ceil(missonComplete), 'месяцев');

let budgetDay = (parseInt(budgetMonth) / 30);
console.log('Бюджет на день: ', Math.floor(budgetDay));

      
if(budgetDay > 1200){
    console.log('у вас высокий уровень дохода');
}
else if(600<=budgetDay){
    console.log('у вас средний уровень дохода');
}
else if(0<=budgetDay){
    console.log('к сожалению ваш уровень дохода ниже среднего');
}
else{
    console.log('что-то пошло не так');
}

function getExpensesMonth(allAmount){
    return allAmount;
}
console.log(getExpensesMonth(allAmount));

function getAccumulatedMonth(income, allAmount){
    return income - allAmount;
}
console.log(getAccumulatedMonth(income, allAmount));


let accummulatedMonth = getAccumulatedMonth(income, allAmount);
console.log(accummulatedMonth);


function getTargetMonth(misson, accummulatedMonth){
    return misson / accummulatedMonth;
}
console.log(getTargetMonth(misson, accummulatedMonth));


let dayPerMonth = 30;
function budgetDay2(accummulatedMonth, dayPerMonth){
    return accummulatedMonth / dayPerMonth 
}
console.log(Math.floor(budgetDay2(accummulatedMonth, dayPerMonth)));


    


