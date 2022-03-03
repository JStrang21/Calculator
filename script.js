const display = document.querySelector('.display');
const operators = document.querySelectorAll('div.container > div.operators button');
const integers = document.querySelectorAll('div.container > div.integers button');
const displayArray = []



//Listen for click then add corresponding value to array 
integers.forEach(integer => {
    integer.addEventListener('click', (e) => {
        return displayArray.push(integer);
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        return displayArray.push(operator);
    })
})

function addition(displayArray) {
    
}


    
   
//for(i=0;i<operators.length;i++){
//    operators[i].style.borderColor = 'red';
//}
