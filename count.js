const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const countValue = document.getElementById('count-value');
let countNumber = 0;
// increaseBtn.addEventListener('click',function(){
//     countNumber++;  
//     countValue.innerText = countNumber;
// });
// decreaseBtn.addEventListener('click',function(){
//     countNumber--;  
//     countValue.innerText = countNumber; 
// });
// resetBtn.addEventListener('click',function(){
//     countNumber = 0; 
//     countValue.innerText = countNumber; 
// });

//Optimize Code into one function
function counter(isTrue){
    if(isTrue == true){
        countNumber++;  
        countValue.style.color="green";
    }
    else if(isTrue==false && countNumber>0){
        countNumber--; 
        countValue.style.color="red"; 
    }
    else{
        countNumber = 0; 
    }
    countValue.innerText = countNumber; 
}
