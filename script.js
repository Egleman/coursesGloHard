
let paragraph = document.querySelector('p');
let debouncedOnInput = debounce(onInput);

//Переменные для анимации
let block = document.querySelector('.block');
let end = 0;
let step = 5;
let isPause = false;
let btnStart = document.querySelectorAll('button')[0];
let reset = document.querySelectorAll('button')[1];
let moveInterval = 0;



function debounce(callback) {
   let timeout;
   return function (argument) {
      clearTimeout(timeout);
      timeout = setTimeout(callback, 300, argument);
   };
}

function onInput(event) {
   paragraph.textContent = event.target.value;
}

document.querySelector('input').addEventListener('keyup', debouncedOnInput);


function move() {
    end += step;
    if (end == 500 || end == 0) {
        step = -step;
    } else if (end < 0) {
        step = 0;
    }
    block.style.marginLeft = end + 'px';
    if(isPause === true) {
        moveInterval = requestAnimationFrame(move);  
    }
}
function pause() {
    if(isPause === true) {
        moveInterval = requestAnimationFrame(move);
        btnStart.textContent = "Пауза";
    }
}


btnStart.addEventListener('click', () => {
    isPause = !isPause;
    step = 5;
    btnStart.textContent = 'Старт';
    pause();
});
reset.addEventListener('click', () => {
    btnStart.click();
    end = 0;
    block.style.marginLeft = end + 'px';
    cancelAnimationFrame(moveInterval);
});
