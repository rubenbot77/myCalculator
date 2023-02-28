const offBtn = document.querySelector('#off');
const perBtn = document.querySelector('#per');
const acBtn = document.querySelector('#ac');
const cBtn = document.querySelector('#c');
const screen = document.querySelector('.screen-contain')
let buttons = [...document.querySelectorAll('.numbers')];
let acumulate = [];


specials()
function specials (){
    screen.value = 'off';
    if (screen.value = 'off') {
        acumulate = ''
    }
    buttons.forEach((button) => {
        button.addEventListener('click', function (){
            acumulate.push(button.value)
            screen.innerText = acumulate.join('')
            let max = acumulate.length
            console.log(max);       
            if (max >= 9) {
               acumulate = ''
            }
             else {
                return
            }
        })
    })
    offBtn.addEventListener('click', specialOff)
    perBtn.addEventListener('click', specialPer)
    acBtn.addEventListener('click', specialAc)
    cBtn.addEventListener('click', specialC);
    
    function specialOff() {
        screen.value = 'off';
        screen.innerText = ''
        acumulate = [];
    }
    function specialPer(){
        console.log(screen.value);
    }
    function specialAc(){
        screen.value = 'on';
        screen.innerText = '0'
        acumulate = [];
    }
    function specialC(){
        acumulate = []
        if (screen.value == 'off') {
            screen.innerText = '';      
        } else {
            screen.innerText = '0'
        }
    }
}