
let langArr = [];
    langArr.ru = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    langArr.en = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function tryChoiceIf() {
    let lang = prompt("Выберите язык, написав ru или en");

    if (lang != 'ru' && lang != 'en') {
        alert('неизвестный язык!');
        tryChoiceIf();
        return;
    }

    if (lang === 'en') {
        for (let i = 0; i < langArr.en.length; i++) {
            console.log(langArr.en[i]);
        }
    } else if (lang === 'ru') {
        for (let k = 0; k < langArr.ru.length; k++) {
            console.log(langArr.ru[k]);
        }
    }
}
function tryChoiceSwitch() {
    let lang = prompt("Выберите язык, написав ru или en");

    if (lang != 'ru' && lang != 'en') {
        alert('неизвестный язык!');
        tryChoiceIf();
        return;
    }

    switch (lang) {
        case 'en': 
            for (let i = 0; i < langArr.en.length; i++) {
                console.log(langArr.en[i]);
            }
        break;
        case 'ru':
            for (let k = 0; k < langArr.ru.length; k++) {
                console.log(langArr.ru[k]);
            }
        break;
        default:
            console.log('Неизвестный язык');
    }

}
function tryChoiceArr() {
    let lang = prompt("Выберите язык, написав ru или en");


    if (lang != 'ru' && lang != 'en') {
        alert('неизвестный язык!');
        tryChoiceArr();
        return;
    }


    for (let j = 0; j < langArr[lang].length; j++) {
        console.log(langArr[lang][j]);
    }
    


}

function nameProfession() {
    let namePerson = prompt("Введите имя");
    console.log((namePerson === 'Артем' || namePerson === 'Артём') ? 'директор' : (namePerson === 'Александр') ? 'преподаватель' : 'студент');
}
tryChoiceIf();
tryChoiceSwitch();
tryChoiceArr();
nameProfession();


