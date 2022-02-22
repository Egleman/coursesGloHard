
document.addEventListener('DOMContentLoaded', () => {
    const px = 10;
    const DomElement = function(selector, height,  width, bg, position) {
        this.selector = selector;
        this.height = height + 'px';
        this.width = width + 'px';
        this.bg = bg;
        this.position = position;
        this.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; position: ${this.position};`;
        this.create = function() {
        let elem;
        
        if (this.selector[0] === '.') {
            elem = document.createElement('div');
            elem.className = this.selector;
        }
        
        if (this.selector[0] === '#') {
            elem = document.createElement('p');
            elem.id = this.selector;
        }
        
        elem.style.cssText = this.cssText;
        elem.style.cssText += `left: ${Math.round(window.innerWidth / 2 - parseInt(this.width) / 2)}px; `;
        elem.style.cssText += `top: ${Math.round(window.innerHeight / 2 - parseInt(this.height) / 2)}px; `;
        
        return elem;
        };
    };

    let square = new DomElement('.block', '100', '100', 'red', 'absolute');
    document.body.appendChild(square.create());

    document.addEventListener('keydown', (event) => {
        const div = document.querySelector('div');
        if (event.key === 'ArrowUp') {
            div.style.top = parseInt(div.style.top) - px + 'px';
        }
        if (event.key === 'ArrowRight') {
            div.style.left = parseInt(div.style.left) + px + 'px';
        }
        if (event.key === 'ArrowLeft') {
            div.style.left = parseInt(div.style.left) - px + 'px';
        }
        if (event.key === 'ArrowDown') {
            div.style.top = parseInt(div.style.top) + px + 'px';
        }
    });



});