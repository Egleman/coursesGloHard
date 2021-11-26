let num = 266219;
let output = [];
let mNumber = num.toString();
let multiplication = 1;



for (let i = 0; i < mNumber.length; i += 1) {
    output.push(+mNumber[i]);
}
console.log(output);

for (let k = 0; k < output.length; k++) {
    multiplication *= output[k];
}
let multDegre = multiplication ** 3;
console.log(multiplication);
console.log(multDegre);
console.log(String(multDegre).slice(0, 2));