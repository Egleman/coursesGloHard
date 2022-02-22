const toDoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const toDoList = document.querySelector('.todo-list');
const toDoCompleted = document.querySelector('.todo-completed');

let toDoData = [];
function test () {
    if (localStorage.getItem('todo')!==null) {
        toDoData = JSON.parse(localStorage.getItem('todo'));
        render();
    }
}

const addToStorage = () => {
    localStorage.clear();
    localStorage.setItem('todo', JSON.stringify(toDoData));
};

function deleteComm() {
    for (let i = toDoData.length - 1; i >= 0; --i) {
        if (toDoData[i].delete == true) {
            toDoData.splice(i,1);
        }
    }
    addToStorage();
}

const render = () => {
    toDoList.innerHTML = '';
    toDoCompleted.innerHTML = '';
    toDoData.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
        '<div class="todo-buttons">' +
		'<button class="todo-remove"></button>' +
		'<button class="todo-complete"></button>' +
		'</div>';

        if (item.completed) {
            toDoCompleted.append(li);

        } else if (!item.completed) {
            toDoList.append(li);
        }

        li.querySelector('.todo-complete').addEventListener('click', () => {
            item.completed = !item.completed;
            render();
            addToStorage();
        });
        li.querySelector('.todo-remove').addEventListener('click', () => {
            item.delete = !item.delete;
            //удаление элемента
            deleteComm();
            render();
        });
    }); 
};

toDoControl.addEventListener('submit', (e) => {
    e.preventDefault();
    //Проверка на пустую строку
    if (headerInput.value.trim() !== '') {
        const newToDo = {
            text: headerInput.value,
            completed: false,
            delete: false
        };
        toDoData.push(newToDo);
    }
    headerInput.value = '';

    render();
    addToStorage();
});

test();

