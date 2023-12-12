let textNumber = document.querySelector('#txtNumber');
let baseDdl = document.querySelector('#base');
let ConvertBtn = document.getElementById('btnConvert');
let spanEl = document.getElementById('convertedValue');
ConvertBtn.addEventListener('click', function () {
    let textVal = +textNumber.value;
    let base = +baseDdl.value;
    if (isNaN(textVal)) {
        spanEl.textContent = "Please enter a valid number";
        spanEl.style.color = '#EF5350';
    } else {
        let convertedVal = textVal.toString(base);
        spanEl.textContent = convertedVal.toUpperCase();
        spanEl.style.color = '#81C784';
        spanEl.style.fontWeight = 'bold';
    }
})