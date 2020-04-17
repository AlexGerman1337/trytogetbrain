alert('urodec');

elem[3].remove(); 
// удаляет элемент из дом дерева
elem[1].remove();
 // они удалились только из дом дерева, в переменных они остались это значит что можнно их вставить


 collections[1].append(elems[3])
 // метод добавляет элемент в КОНЕЦ списка, он ПЕРЕМЕЩАЕТ ( а не создает копии) ВНУТРЬ

 collections[1].prepend(elems[5]); ВНУТРЬ
 // метод добавляет элемент в НАЧАЛО списка

collections[0].before(collections[1])
// ВСТАВЛЯЕТ ПЕРЕД КАКИМИ ЛИБО ЭЛЕМЕНТАМИ ИЛИ БЛОКАМИ ПЕРЕЖ

collections[4].after(elems[0]);
// вставляет после каких либо элементов
// если вставлять 
// слева - точка распложения - справа откуда вставили

elems[2].replaceWith(elems[3]);
// УБИРАЕТ ЭЛЕМЕНТ СЛЕВА И ЗАМЕНЯЕТ ЕГО СЛЕВА , можно заменить на надпись 


const elemClone = elems[3].cloneNode(true);
collections[1].append(elemClone);
// клонирует все если есть true если нет тру то только ноду

elemClone.classList.add('newElem');
// добавляет класс

elemClone.textContent = 'new elem';
// меняет текст


elems[2].textContent = <span>Привет</span>;
// текст контект это просто текст
elems[2].innerHTML = '<span>ПРИВЕТ</span>';
// cjздали элемент спан внутри элемента элемс 2

elems[2].innerHTML = '<b>ПРИВЕТ</b>';
// затирает всю верстку поэтому лучше создать элемент


const newElem = document.createElement('li');
// создали элемент но он еще не на странице а в памяти
newElem.textContent = ' Новый элемент ';
coleections[1].append(newElem);
newElem.classList.add('new_elem')
// добавили содержание 16 15 на стооагице

let secondHead = document.getElementById('second-head');
secondHead.insertAdjacentText('beforebegin', 'beforebegfin') // вначале 
secondHead.insertAdjacentText('afterend', 'afterend')
secondHead.insertAdjacentText('afterbegin', 'afterbegin'); // после указания бля посмотри еще раз это говно
secondHead.insertAdjacentText('beforeend', 'beforeend')

// если не хочешь затирать текст внутри с помощью текст контента воспользуйся этим

secondHead.insertAdjacentElement('beforebegin', elems[1])
secondHead.insertAdjacentElement('afterend', elems[2])
secondHead.insertAdjacentElement('afterbegin', elems[3])
secondHead.insertAdjacentElement('beforeend', 'elems[4])

// втавка элементов


secondHead.insertAdjacentHTML('beforebegin', <h3>beforebegfin</h3>)
secondHead.insertAdjacentHTML('afterend', <h3>'afterend'</h3>)
secondHead.insertAdjacentHTML('afterbegin', <p>'afterbegin'</p>)
secondHead.insertAdjacentHTML('beforeend', <p>'beforeend'</p>)

// p это параграф 23 20 смотри видос



collections[1].appendChild(newElem);
 // вставил его в ноывй элемент это старый метод APPEND


 collections[0].insertBefore(newElem, elems[4] )

 // СТАРЫЙ МЕТОД BEFORE

 