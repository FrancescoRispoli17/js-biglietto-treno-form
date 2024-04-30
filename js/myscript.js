'use strict';

const button=document.querySelector('#genera');
const reset=document.querySelector('#reset');

button.addEventListener('click', function(){
    const name=document.querySelector('#name').value;
    const km=Number(document.querySelector('#km').value);
    const eta=document.getElementById('eta').value;
    console.log(name + km + eta);
    let prezzo=(km*0.21).toFixed(2);

    if(eta=='minorenne'){
        prezzo=(prezzo-prezzo/5).toFixed(2);
    }
    else if(eta=='over65'){
        prezzo=(prezzo-prezzo/5*2).toFixed(2);
    }
    console.log(prezzo)
})
reset.addEventListener('click', function(){

    
})


