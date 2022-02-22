let books = document.querySelector('.books');
let book = document.querySelectorAll('.book');
let body = document.querySelector('body');
let adv = document.querySelector('.adv').remove(); // удаление рекламы
let listBook2 = book[0].querySelectorAll('li');
let listBook5 = book[5].querySelectorAll('li');
let listBook6 = book[2].querySelectorAll('li');

//Добавление 8 главы в 6 книгу
let chapter = document.createElement('li');
let book6 = book[2].querySelector('ul');
chapter.append(document.createTextNode('Глава 8: За пределами ES6'));
book6.append(chapter);

listBook6[9].before(chapter);
// конец добавления

//Замена книг местами
books.append(book[2]);
book[0].before(book[1]);
book[3].before(book[4]);
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';


//замена порядка глав
listBook2[3].after(listBook2[6]);
listBook2[8].after(listBook2[4]);
listBook2[4].after(listBook2[5]);
listBook2[9].after(listBook2[2]);

listBook5[3].before(listBook5[9]);
listBook5[4].after(listBook5[2]);
listBook5[8].before(listBook5[5]);


//Замена заголовка книги 3
book[4].querySelector('a').textContent = "Книга 3. this и Прототипы Объектов";



console.log(book);




