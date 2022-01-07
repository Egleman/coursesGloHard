let selectVal = document.querySelector('.valuta');
let doll = document.querySelector('.doll');
let rub = document.querySelector('.rub');
let num = document.querySelector('.number');
let result = document.querySelector('.result');
let converterDiv = document.querySelector('.converter');

const btnConvert = document.querySelector('#converta');

let usd;

function CBR_XML_Daily_Ru(rates) {
    let USDrate = rates.Valute.USD.Value.toFixed(4);
    console.log(USDrate);
    btnConvert.addEventListener('click', () => {
        if (selectVal.value == 'dollar') {
            if (num.value != '') {
                result.value = '';
                let res = +(num.value * USDrate);
                result.value = res.toFixed(3);
                result.readOnly = true;
            } 
        } else if (selectVal.value == 'rub') {
            if (num.value != '') {
                result.value = '';
                let res = +(num.value / USDrate);
                result.value = res.toFixed(3);
                result.readOnly = true;
            }
            
        }
    });
    
}

selectVal.addEventListener('change', () => {
    if(selectVal.value == 'dollar') {
        doll.textContent = 'Доллар США (USD)';
        rub.textContent = 'Российский рубль (RUB)';
        num.value = '';
        result.value ='';
    } else if(selectVal.value == 'rub') {
        doll.textContent = 'Российский рубль (RUB)';
        rub.textContent = 'Доллар США (USD)';
        num.value = '';
        result.value ='';
    } else if (selectVal.value == '' || selectVal.value == 'val') {
        num.value = '';
        result.value ='';
    }
});






