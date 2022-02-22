let body =  document.querySelector('body');
const DomElement = function(selector, height, width, bg, fontSize) {
this.selector = selector;
this.height = height + 'px';
this.width = width + 'px';
this.bg = bg;
this.fontSize = fontSize + 'px';
this.create = function() {
    if(this.selector[0] == '.') {
            let div = document.createElement('div');
            div.classList.add(this.selector);
            div.textContent = 'Привет, я блок';
            div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
            body.append(div);
        } else if (this.selector[0] == '#') {
            let p = document.createElement('p');
            p.id = this.selector;
            p.textContent = 'Привет, я параграф';
            p.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
            body.append(p);
        }
    };
};

let newDiv = new DomElement('.block', '100', '200', 'green', '25');
let newParagraph = new DomElement('#best', '150', '300', 'red', '25');

    

newDiv.create();
newParagraph.create();