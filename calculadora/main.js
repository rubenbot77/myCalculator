const offBtn = document.querySelector('#off');
const perBtn = document.querySelector('#per');
const acBtn = document.querySelector('#ac');
const cBtn = document.querySelector('#c');
const screen = document.querySelector('.screen-contain')
const numberOne = document.querySelector('#one')

numberOne.addEventListener('click', numOne)

function numOne () {
    screen.innerText = numberOne.value;
}

// document.addEventListener("click", function(event){
//     if (event.target.className == "numbers"){
//         console.log(event.value);
//     }
// }, false);

specials()
function specials (){
    offBtn.addEventListener('click', specialOff)
    perBtn.addEventListener('click', specialPer)
    acBtn.addEventListener('click', specialAc)
    cBtn.addEventListener('click', specialC);
    
    function specialOff() {
        screen.value = 'off';
        screen.innerText = ''
    }
    function specialPer(){
        console.log(screen.value);
    }
    function specialAc(){
        screen.value = 'on';
        screen.innerText = '0'
    }
    function specialC(){
        if (screen.value == 'off') {
            screen.innerText = ''        
        } else {
            screen.innerText = '0'
        }
    }
}