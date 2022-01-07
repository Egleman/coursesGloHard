//Функция сравнения типа с элементами массива
const filterByType = (type, ...values) => values.filter(value => typeof value === type);
	//Функция скрытия всех блоков изначально
	const hideAllResponseBlocks = () => {
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'));
		responseBlocksArray.forEach(block => block.style.display = 'none');
	};
	//Функция показа блока
	const showResponseBlock = (blockSelector, msgText, spanSelector) => {
		hideAllResponseBlocks();
		document.querySelector(blockSelector).style.display = 'block';
		if (spanSelector) {
			document.querySelector(spanSelector).textContent = msgText;
		}
	};

	//Функции показа блоков в зависимости от результатов
	const showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error');

	const showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok');

	const showNoResults = () => showResponseBlock('.dialog__response-block_no-results');

	//Функция создания массива из полученной строки
	const tryFilterByType = (type, values) => {
		//Выполнение инструкции из блока try
		try {
			//Выполнение кода из строки
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");
			//Строчное условие
			const alertMsg = (valuesArray.length) ?
				`Данные с типом ${type}: ${valuesArray}` :
				`Отсутствуют данные типа ${type}`;
			//функция отображения блока с результатом
			showResults(alertMsg);
			//Выполнение инструкции в случае ошибки
		} catch (e) {
			//Функция отображения блока с ошибкой
			showError(`Ошибка: ${e}`);
		}
	};
//Получение кнопки
const filterButton = document.querySelector('#filter-btn');

//Слушает кнопку по клику
filterButton.addEventListener('click', e => {
	//Получением нипутов со страницы
	const typeInput = document.querySelector('#type');
	const dataInput = document.querySelector('#data');

	//проверка инпутов на пустоту
	if (dataInput.value === '') {
		// setCustomValidity() устанавливает специальное сообщение для выбранного элемента
		dataInput.setCustomValidity('Поле не должно быть пустым!');
		// Функция отображения блока с отсутсвием результатов
		showNoResults();
	} else {
		dataInput.setCustomValidity('');
		//Сброс стандартного поведения формы
		e.preventDefault();
		//Функция с аргументами
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim());
	}
});

