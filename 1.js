'use strict';

// class square в HTMLAllCollection
// console dir выводит в обьекте
// методы начинающиеся на on это обработчики событий
let square = document.querySelector('.square');
let count = 0;

let eventFunc = function(event){
    console.log(event.type);
    console.log(event.target.value);
}

square.onclick = function(){
    
    if(count === 3){
        console.log(' опачки');

        square.onclick = null;
        return;
    }
    count++;
    console.log(' вы кликлина на квадрат');
};


// функциыя вывода консоль лога
//  square.onclick = null; - благодаря этому нет бесконечного онклика


square.onclick = function(){
    console.log('Это вторая функция');
};

// перезапишет первый



// НАВЕШИВАНИЕ СЛУШИТЕЛЯ
// метод принимает 3 паараментра 2 из которых обязательные , первый это само событие, второй параметр это 
// передача фукции которая будет обрабатывать событие 
square.addEventListener('click', function(){
    console.log(' произошел клик по квадрату ');
});

square.addEventListener('click', function(){
    console.log(' произошел клик по квадрату 2 ');
});
square.addEventListener('click', function(){
    console.log(' произошел клик по квадрату 3');
});

// и это все работает вместе

let clicked = function(){
    count++;
    if(count === 3) square.removeEventListener('click', clicked);
    console.log(' произошел клик по квадрату 3');
}
square.addEventListener('click', clicked);





// у каждого события есть обьект события чтобы его получить в обработчике нужно сделать  парамет event 

square.addEventListener('click', function(event){
    console.log(event.type);
};
square.addEventListener('click', eventFunc);
square.addEventListener('mousedown', eventFunc); // нажатие но не отпускать
square.addEventListener('mouseup', eventFunc); // отпускание без нажатия

square.addEventListener('mouseenter') // без детей
square.addEventListener('mouseleave')
square.addEventListener('mouseout') // с детьми
square.addEventListener('mousemover', eventFunc);







// событие импут меняется когшда меняется value  он запиывает любое нажатие клавиши
// событие change работает когда ты условно выходишь из кнопки или обработчика

document.querySelector('#text').addEventListener('input', eventFunc);
document.querySelector('#text').addEventListener('change', eventFunc);

document.querySelector('#text').addEventListener('keydown', eventFunc); // нажатие
document.querySelector('#text').addEventListener('keyup', eventFunc); // отпускание
// срабатывает постоянно при нажатии любой кнопки

document.querySelector('#text').addEventListener('focus', eventFunc);
document.querySelector('#text').addEventListener('blur', eventFunc);
document.querySelector('#range').addEventListener('change', eventFunc);



document.addEventListener('DOMContenLoaded'), function(){
    console.log('Страница загрузилаась');
};


window.onbeforeunload = function(){
    return 'Вы уверены что хотите уйти со страницы';
};


// предупреждение когда пытаешься закрыть





document.querySelector('#link').addEventListener('click', function(event){
    event.preventDefault();
    console.log('click');
});
 
// отмена события кнопки или ссылки или чего то еще+



document.querySelector('contextmenu').addEventListener('click', function(event){
    event.preventDefault();
    console.log('click');
});

// запрещает контекстное меню браузерное




document.addEventListener('DOMContentLoaded', function)(){
'use strict';

let clickElem = null;

function greenHundler(event){ 
if(clickElem){// если элемент вообще сущетсвует (не равен фолс )
    clickElem.classList.remove('green'); // удаляем у него класс грин 
}
// срабатывает когда клиекаешь

clickElem = event.currentTarget; // присваиваем новйы элемент
clickElem.classList.add('green'); // присваиваем класс грин
}
document.querySelector('.event_btn').addEventListener('click', greenHundler);
document.querySelector('.circle').addEventListener('click', greenHundler);
document.querySelector('.square').addEventListener('click', greenHundler);
document.querySelector('.body').addEventListener('click', greenHundler, true);
// обработчики событий джля боди круга и квадратаа
// каждый обработчик событий должекн добавиться класс грин
// он нажал на кнопку в центре и покрасился бади потому что кнопка находится в круге => квадрате => боди
// чтобы заработал захватчик событий нужно добавить true в обработчик чобытимй
// без tru это 
});




















