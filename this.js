// THIS это ключевое слово/ссылка на какой то объект
// он всегда ссылается на объект, создается запись актицвации ИМЕННО ВО ВРЕМЯ ВЫЗОВА
// у нее 4 правила
callsteck(стек вызова функции) and Callsite(место выводы функции)

function one (){
    console.log();
    two();
}

function two(){
    console.log('two');
    tree();
}

function tree(){
    console.log('tree');
}
    one();

one();


// this всегда сущетсвует только внутри функции и определяется при вызове функции и зависит от того где и как
//  функция вызывается
//  когада мы записываем переменную в var она записывается в глобальный обьект виндов



// если функция вызывается без точки т.е. не как метод то будет глобальное - привязка по умолчанию (правило 1);
// он не зависит от глобальной видисомти


function test(){
 console.log('Hello');
}

test();


let obj = {
    x: 10,
    y: 15,
    test:function(){
        console.log(this);
    }

};

let obj2 = {
    x:20,
    y:25,
    testObj:obj
};

function newTest(){
    console.log('this', this.x);
}

obj.test();
obj2.testObj.test();

// получили одно и тоже потому что контекст вызовы берется из последнего обьекта (testObj)


let obj = {
    x: 10,
    y: 15,
    test:function(){
        console.log(this);
    }

};

let foo = obj.test;

function newTest(){
console.log('this: ', this);
}

foo();

// получили виндов потому что привязка по умолчанию ибо вызвали просто функцию

foo(obj.test); // тоже самое
setTimeout(obj.test, 100)// тоже самое потому что не явная привязка


let obj = {
    x: 10,
    y: 15,
    test:function(){
        console.log(this);
    }

};

function newTest(){
    console.log('this: ', this);
}

function hardfBind(){
    newTest.call(obj);
}

hardfBind();


newTest.applt(obj);
newTest.call(obj); // сгачала работает аплай или колл а потом вызвается функция - поэтому это явная привзяка
//  и будет х у а не виндов



let foo = newTest.bind(obj);

foo(); 










//  1. привязка по умолчанию foo();
//  2. не явная привязка obj.foo();
//  3. Явная привязка aplly call bind
//  4. привязка new
// 
// 
