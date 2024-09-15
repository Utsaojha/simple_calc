
const numA = document.getElementById('num1');
const numB = document.getElementById('num2');

function sum (){
    const result = parseFloat(numA.value) + parseFloat(numB.value);
    document.getElementById('result').innerText = ("Sum = " + result);
}
function difference (){
    const result = parseFloat(numA.value) - parseFloat(numB.value);
    document.getElementById('result').innerText = ("Difference = " + result);
}
function divide (){
    const result = parseFloat(numA.value) / parseFloat(numB.value);
    document.getElementById('result').innerText = ("Quotient = " + result);
}
function multiply (){
    const result = parseFloat(numA.value) * parseFloat(numB.value);
    document.getElementById('result').innerText = ("Multiplication = " + result);
}