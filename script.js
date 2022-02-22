
/*
Напишите расширения метода прототипа:
1) Два класса, First и Second, Second наследует от First .
2) В First есть метод hello - он печатает в консоль "Привет я метод родителя!".
3) Нужно написать в Second метод hello, чтоб он сначала вызывал метод hello из First, а потом сразу печатал в консоль "А я наследуемый метод!"
*/

class First {
    constructor() {}
    hello() {
        console.log('Привет я метод родителя!');
    }
}

class Second extends First{
    constructor() {
        super();
    }
    
    hello() {
        super.hello();
        console.log('А я наследуемый метод!');
    }
}

let test = new Second();
test.hello();


/*
Я научился перебирать массивы. Массивы это такая коробочка, в которую можно положить какие-нибудь вещи. 
А перебрать её означает вытащить все вещи из коробки и положить их рядом отдельно друг от дурга и почистить от пыли, например.
Научился узнавать пустые ли строки и что в них лежит. Это как посмотреть на полку и понять есть ли на полке что-нибудь и что это такое.
Научился записывать данные в localStorage. Это как выучить стихотворение, чтобы не забыть его.
Научился обрабатывать события. Это означает, что если ты покушал и испачкал тарелку, то её надо помыть.
*/