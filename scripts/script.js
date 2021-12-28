let blocks = document.getElementsByClassName('block');
let square = document.querySelector('.square-body');


function moveLeft(element) {
  if(element.previousElementSibling) {
    element.parentNode.insertBefore(element, element.previousElementSibling);
  }
}

function moveRight(element) {
  if(element.nextElementSibling){
    element.parentNode.insertBefore(element.nextElementSibling, element);
  }  
}

function moveUp(element) {
  let id = Array.from(blocks).findIndex(currentValue => currentValue == element);
  let validId = id - 5;
  console.log(validId);
  if (validId >= 0) {
    blocks[validId].after(blocks[id]);
    blocks[id].after(blocks[validId]);
  }
}

function moveDown(element) {
  let id = Array.from(blocks).findIndex(currentValue => currentValue == element);
  let validId = id + 5;
  console.log(validId);
  if (validId <= 24) {
    blocks[id].after(blocks[validId]);
    blocks[validId].after(blocks[id]);
  }
  
}
document.body.addEventListener('click', (e) => {
  if(e.target.closest('.left') && e.target.closest('.block')){
      let btn = e.target.closest('.left') && e.target.closest('.block');
      moveLeft(btn);
  } else if (e.target.closest('.right') && e.target.closest('.block')) {
      let btn = e.target.closest('.right') && e.target.closest('.block');
      moveRight(btn);
  } else if (e.target.closest('.top') && e.target.closest('.block')) {
      let btn = e.target.closest('.top') && e.target.closest('.block');
      moveUp(btn);
  } else if (e.target.closest('.bottom') && e.target.closest('.block')) {
      let btn = e.target.closest('.bottom') && e.target.closest('.block');
      moveDown(btn);
  } else if (e.target.className === 'btn-reset') {
    square.innerHTML = '';
    square.innerHTML = `<div class="block">
                <div class="block-number">1</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">2</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">3</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">4</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">5</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">6</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">7</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">8</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">9</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">10</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">11</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">12</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">13</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">14</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">15</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">16</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">17</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">18</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">19</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">20</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">21</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">22</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">23</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">24</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
            <div class="block">
                <div class="block-number">25</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>`;
  }
});