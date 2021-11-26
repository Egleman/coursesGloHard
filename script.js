let num = 266219;
let output = [];
let mNumber = num.toString();
let multiplication = 1;



for (let i = 0, len = mNumber.length; i < len; i += 1) {
    output.push(+mNumber[i]);
}
console.log(output);

for (var i = 0; i < output.length; multiplication *= output[i++]) {
    
}
let multDegre = multiplication ** 3;
console.log(multiplication);
console.log(multDegre);
console.log(String(multDegre).slice(0, 2));
