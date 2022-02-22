let form = document.querySelector('form');
let firstName = document.querySelector('#name');
let secondName = document.querySelector('#surname');
let phoneNumber = document.querySelector('#tel');
let age = document.querySelector('#age');

let classVariable = document.querySelector('#classVariable');
let locksmith = document.querySelector('.locksmith');
let education = document.querySelector('#education');
let pastJob = document.querySelector('#pastJob');

let driver = document.querySelector('.driver');
let experience = document.querySelector('#experience');
let categories = document.querySelector('#categories');


let table = document.querySelector('.table');

let workerArr = [];

class Worker {
    constructor(name, surname, phone, age, select) {
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.age = age;
        this.select = select;
    }
    //Геттер
    get selectValue() {
        return this._select;
      }
    //Сеттер
    set selectValue(value) {
        if(classVariable.value === 'Слесарь') {
            this.select = value;
        } else if (classVariable.value === 'Водитель') {
            this.select = value;
        }
    }

  
}

class Locksmith extends Worker{
    constructor(name, surname, phone, age, select, education, pastJob, deleted) {
        super(name, surname, phone, age, select);
        this.education = education;
        this.pastJob = pastJob;
        this.deleted = deleted;
    }

    get deletedValue() {
        return this._deleted;
      }
    set deletedValue(value) {
        this.deleted = value;
      }
}

class Driver extends Worker {
    constructor(name, surname, phone, age, select, experience, categories, deleted) {
        super(name, surname, phone, age, select);
        this.experience = experience;
        this.categories = categories;
        this.deleted = deleted;
    }

    get deletedValue() {
        return this._deleted;
      }
    set deletedValue(value) {
        this.deleted = value;
      }
}

function checkLocalStorage () {
    if (localStorage.getItem('Worker')!==null) {
        workerArr = JSON.parse(localStorage.getItem('Worker'));
        console.log(workerArr);
        render();
    }
}
function deleteWorker() {
    for (let i = workerArr.length - 1; i >= 0; --i) {

        if (workerArr[i].deleted == true) {
            workerArr.splice(i,1);
        }
    }
    addToStorage();
} 
function addToStorage()  {
    localStorage.clear();
    localStorage.setItem('Worker', JSON.stringify(workerArr));
}

function render() {
    table.innerHTML = '';
    workerArr.forEach(function(item) {
        let btn = document.createElement('button');
            btn.textContent = "Уволить";
        if (item.select === 'Слесарь') {
            let row = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");
            let td6 = document.createElement("td");
            let td7 = document.createElement("td");
            let td8 = document.createElement("td");
            td1.append(document.createTextNode(item.name));
            td2.append(document.createTextNode(item.surname));
            td3.append(document.createTextNode(item.phone));
            td4.append(document.createTextNode(item.age));
            td5.append(document.createTextNode(item.select));
            td6.append(document.createTextNode(item.education));
            td7.append(document.createTextNode(item.pastJob));
            td8.append(btn);
            row.append(td1);
            row.append(td2);
            row.append(td3);
            row.append(td4);
            row.append(td5);
            row.append(td6);
            row.append(td7);
            row.append(td8);
            table.append(row);
        } else if (item.select === 'Водитель') {
            let row = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");
            let td6 = document.createElement("td");
            let td7 = document.createElement("td");
            let td8 = document.createElement("td");
            td1.append(document.createTextNode(item.name));
            td2.append(document.createTextNode(item.surname));
            td3.append(document.createTextNode(item.phone));
            td4.append(document.createTextNode(item.age));
            td5.append(document.createTextNode(item.select));
            td6.append(document.createTextNode(item.experience));
            td7.append(document.createTextNode(item.categories));
            td8.append(btn);
            row.append(td1);
            row.append(td2);
            row.append(td3);
            row.append(td4);
            row.append(td5);
            row.append(td6);
            row.append(td7);
            row.append(td8);
            table.append(row);
        }

        btn.addEventListener('click', () => {
            item.deleted = !item.deleted;
            deleteWorker();
            render();
        });
    }); 
}    


classVariable.addEventListener('change', () => {
    if (classVariable.value === 'Слесарь') {
      driver.style.display = 'none';
      locksmith.style.display = 'flex';
    } else if (classVariable.value === 'Водитель') {
      driver.style.display = 'flex';
      locksmith.style.display = 'none';
    } else {
      driver.style.display = 'none';
      locksmith.style.display = 'none';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (classVariable.value === 'Слесарь') {
        if (education.value.trim() !== '' && pastJob.value.trim() !== '') {
            let locksmith = new Locksmith(firstName.value, secondName.value, phoneNumber.value, age.value, classVariable.value, education.value, pastJob.value, deleted = false);
            //Применяю сеттер
            locksmith.selectValue = classVariable.value;
            workerArr.push(locksmith);
            render();
            addToStorage();
        }
    } else if (classVariable.value === 'Водитель') {
        if (experience.value.trim() !== '' && categories.value.trim() !== '') {
            let driver = new Driver(firstName.value, secondName.value, phoneNumber.value, age.value, classVariable.value, experience.value, categories.value, deleted = false);
            //Применяю сеттер
            driver.selectValue = classVariable.value;
            workerArr.push(driver);
            render();
            addToStorage();
        }
    }
    //обнуляем форму
    firstName.value = '';
    secondName.value = '';
    phoneNumber.value = '';
    classVariable.value = 'должность';
    locksmith.style.display = 'none';
    driver.style.display = 'none';
    education.value = '';
    pastJob.value = '';
    categories.value = '';
    experience.value = '';
  });
  //проверяем localStorage
  checkLocalStorage();




