const acumulate = document.querySelector('#acumulate-value');
const current = document.querySelector('#current-value');
const numbersBtn = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operator');



numbersBtn.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML))
});
operators.forEach(operator => {
    operator.addEventListener('click', ()=> display.comput(operator.value))
})
class Calculator {
    add(num1, num2) {
        return num1 + num2;
    }
    subtract(num1, num2) {
        return num1 - num2;
    }
    divide(num1, num2){
        return num1 / num2;
    }
    multiply(num1, num2){
        return num1* num2
    }
    persentage(num1, num2){
        return ((num1 * 100) / num2)
    }
    exponential(num1, num2) {
        return num1 ** num2
    }
}

class Display {
    constructor(current, acumulate){
        this.current = current;
        this.acumulate = acumulate;
        this.calculator = new Calculator();
        this.operatorType = undefined;
        this.currentValue = '';
        this.acumulateValue = '';
        this.signs = {
          add: '+',
          divide: '÷',
          subtract: '-',
          multiply: 'x',
          persentage: '%',
          exponential: '^'
        }
    }
    deleteAll(){
        this.currentValue = '';
        this.acumulateValue = '';
        this.operatorType = undefined
        this.printValue()
    }
    comput(type){
        this.operatorType !== 'equal' && this.calculate();
        this.operatorType = type;
        this.acumulateValue = this.currentValue || this.acumulateValue;
        this.currentValue = '';
        this.printValue();
    }
    delete(){
        this.currentValue = this.currentValue.toString().slice(0, -1);
        this.printValue();
    }
    off(){
        this.acumulateValue = '';
        this.currentValue = '';
        this.operatorType = undefined
        this.printValue();
    }
    addNumber(number){
        if(number === '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + number.toString();
        this.printValue();
        
    }
    printValue(){
        this.current.textContent = this.currentValue;
        this.acumulate.textContent = `${this.acumulateValue} ${this.signs[this.operatorType] || ''}`;

    }
    calculate(){
        const acumulateValue = parseFloat(this.acumulateValue);
        const currentValue = parseFloat(this.currentValue);
        if(isNaN(acumulateValue) || isNaN(currentValue)) return;
        this.currentValue = this.calculator[this.operatorType](acumulateValue, currentValue)

    }
    
}
const display = new Display(acumulate, current);
