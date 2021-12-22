
let paragraph = document.querySelector('p');
let debouncedOnInput = debounce(onInput);

//Переменные для анимации
let block = document.querySelector('.block');
let end = 0;
let step = 5;
let isPause = false;
let btnStart = document.querySelector('.start');
let btnPause = document.querySelector('.pause');
let reset = document.querySelector('.reset');
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
    if (end > 500) {
        end = -100;
        end += step;
    } 
    block.style.marginLeft = end + 'px';
    if(isPause === true) {
        moveInterval = requestAnimationFrame(move);  
    }
}
function pause() {
    if(isPause === true) {
        moveInterval = requestAnimationFrame(move);
    }
}


btnStart.addEventListener('click', () => {
    isPause = !isPause;
    //step = 5;
    btnStart.style.display = 'none';
    btnPause.style.display = 'inline-flex';
    pause();
});

btnPause.addEventListener('click', () => {
    isPause = !isPause;
    btnStart.style.display = 'inline-flex';
    btnPause.style.display = 'none';
    pause();
});
reset.addEventListener('click', () => {
    if(getComputedStyle(btnStart).display == 'inline-flex') {
        isPause = false;
    } else if(getComputedStyle(btnPause).display == 'inline-flex') {
        isPause = false;
        btnStart.style.display = 'inline-flex';
        btnPause.style.display = 'none';
    }
    end = 0;
    block.style.marginLeft = end + 'px';
    cancelAnimationFrame(moveInterval);
});

console.log(getComputedStyle(btnStart).display == 'inline-flex');