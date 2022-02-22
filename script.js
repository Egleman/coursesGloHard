let btnColor = document.querySelector('#btn');
let square = document.querySelector('#square');

//Доступные цвета, чтобы пользователь не мог ввести что попало
let colorArr = ['white', 'silver', 'gray', 'black', 'maroon', 'red', 'orange', 'yellow', 'olive', 'lime',
'green', 'aqua', 'blue', 'navy', 'teal', 'fuchsia', 'purple', 'tomato'];

let eBtn = document.querySelector('#e_btn').style.display = 'none'; // Отключение кнопки в круге
let rangeSpan = document.querySelector('#range-span');
let range = document.querySelector('#range');
let circle = document.querySelector('#circle');


range.setAttribute('value', '50');
range.setAttribute('min', '0');
range.setAttribute('max', '100');
rangeSpan.textContent = '50';

//Функция проверки на существующий цвет
function findColor(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}

//Клик для изминения цвета
btnColor.addEventListener('click', () => {
    let textColor = document.querySelector('#text').value;
    //проверка на пустую строку и существующий цвет
    if (textColor !== '' && findColor(colorArr, textColor)) {
        square.style.backgroundColor = textColor;
        document.querySelector('#text').value = "";
    }
});

//Функция изменения круга по ползунку
range.addEventListener('input', () => {
    rangeSpan.textContent = range.value;
    circle.style.width = range.value + '%';
    circle.style.height = range.value + '%';
});






