

    let money = 10000;
    
    let income = 25;

    let addExpenses = "brain";

    let deposit = 29900;

    let misson = 150000;

    let period = "60 days";

    alert("hello monkeys");

    console.log("вывел что то в консоль");


    money = prompt("Ваш месячный доход ?");
    addExpenses  = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
    deposit = confirm("Есть ли у вас депозит в банке?");


    console.log(money);
    console.log(addExpenses);
    console.log(deposit);
// это я проверял как рабоатет и работает ли корректно код


    let expenses1 = prompt("Введите обязательную статью расходов");
    let amount1 = prompt("Во сколько это обойдется?");
    let expenses2 = prompt("Введите обязательную статью расходов");
    let amount2 = prompt("Во сколько это обойдется?");
    console.log('Расходы1: ', expenses1);
    console.log('Стоимость1: ', amount1);
    console.log('Расходы2: ', expenses2);
    console.log('Стоимость2 : ', amount2 );


    let allAmount =(parseInt(amount2) + parseInt(amount2));
    console.log('Все расходы:' , allAmount);
    let budgetMonth = (parseInt(money) - parseInt(allAmount));
    console.log('Бюджет на месяц: ', budgetMonth);

    
    let missonComplete = misson / budgetMonth;
    console.log('Цель будет достигнута за: ', Math.ceil(missonComplete), 'месяцев');

    let budgetDay = (parseInt(budgetMonth) / 30);
    console.log('Бюджет на день: ', Math.floor(budgetDay));

      
    if(budgetDay >= 1200){
        console.log('у вас высокий уровень дохода');
    }
    else if(1200>budgetDay&&budgetDay>=600){
        console.log('у вас средний уровень дохода');
    }
    else if(600<budgetDay&&budgetDay>=0){
        console.log("к сожажению у вас низкий уровень дохода");
    }