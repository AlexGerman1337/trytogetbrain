


const collections = document.querySelectorAll('ul'),
      elems = document.querySelectorAll('li');
      console.log(collections);
      console.log(elems),
    // вывел себе в консоль все элементы для удобной навигации
    book02 = document.querySelectorAll('.book')[0],     
    book01 = document.querySelectorAll('.book')[1],
    book06 = document.querySelectorAll('.book')[2],
    book04 = document.querySelectorAll('.book')[3],
    book03 = document.querySelectorAll('.book')[4],
    book05 = document.querySelectorAll('.book')[5];

        
        book01.after(book02);
        book03.after(book06);
        book04.before(book03);
        book05.after(book06);
        // расположил книги в хронологическом порядке


    console.log(book01);
    console.log(book02);
    console.log(book03);
    console.log(book04);
    console.log(book05);
    console.log(book06);

    const books = document.querySelectorAll('.books');
    console.log(books);

    const img = document.querySelectorAll('.adv');
    img[0].remove();
    console.log(img);
    // удалил купи гугл

    let headerBook03 = document.querySelectorAll('h2 a')[2];
    headerBook03.textContent ='"Книга 3. this и Прототипы Объектов"';
    console.log(headerBook03);
    // заменил заголовок
    
    let BookChapter08 = document.createElement('b');
    BookChapter08.textContent = 'Глава 8: За пределами ES6';
    elems[26].before(BookChapter08);
    // добавил главу 8
    console.log(BookChapter08);


    
    document.body.style.backgroundImage = 'url(https://sun9-43.userapi.com/c813024/v813024203/7c099/AXGcsThJxQo.jpg)';
    // сначала я делал document.body.style.backgroundImage = 'image\you-dont-know-js.jpg'; 
    // но это почему то не работает , поэтому сделал по другому.
    

    elems[9].after(elems[2]);
    elems[3].after(elems[6]);
    elems[4].before(elems[8]);

    // поправил книгу 2


    elems[47].after(elems[55]);
    elems[52].before(elems[48]);
    elems[54].before(elems[51]);

    // поправил книгу 5





























// Используя только файл скрипта (html руками не трогать) выполнить такие действия:




// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)







// Проверить, чтобы все работало и не было ошибок в консоли



// Добавить папку с уроком на свой GitHub





