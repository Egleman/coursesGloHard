const select = document.getElementById('cars');
const divCar = document.querySelector('.car');
let addedCars = {};

class Car {
    constructor(elem) {
        this.brand = elem.brand;
        this.model = elem.model;
        this.price = elem.price;
    }

    newCar() {
        const carName = document.createElement('p');

        carName.className = 'car-name';

        carName.innerHTML = `Тачка: <b>${this.brand} ${this.model}</b><br>
        Цена: <b>${this.price}$</b>`;

        return carName;
    }

    checkCar(select = '') {
        if (select === 'car' || select === '') {
            const carName = document.querySelector('.car-name');
            carName.textContent = 'Выбери тачку';
        } else {
            const carName = document.querySelector('.car-name');
            carName.textContent = '';
            return this.brand === select ? select : '';
        }
    }
}

const getData = (data) => {
    fetch('cars.json')
    .then(response => {
        return response.json();
    })
    .then(data)
    .catch(err => {
        console.log(err, 'ошибка, файл не найден');
    });
};

const addSelectCars = () => {
    const allBrands = [];

    addedCars.forEach(car => {
        allBrands.push(car.brand);
    });
    
    allBrands.sort().forEach(brand => {
        const option = document.createElement('option');

        option.value = brand;
        option.textContent = brand;

        select.append(option);
    });
    
};
const addCars = (cars = '') => {
        addedCars.filter(car => car.checkCar(cars))
        .forEach(car => divCar.append(car.newCar()));
};

select.addEventListener('change', (e) => {
    divCar.textContent = '';
    addCars(e.target.value);
});

getData((data) => {
    addedCars = data.cars.map(item => new Car(item));
    addSelectCars();
    addCars();
});


