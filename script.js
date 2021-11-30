
const apple = (txt) => {
    if (typeof txt !== 'string') {
        return 'Не строка';
    }
    let text = txt.trim();
    if (text.length > 30) {
        return text.slice(0, 30) + '...';
     } else {
         return text;
     }

    
    
};

console.log(apple('   Lorem ipsum dolor sit amet consec    '));