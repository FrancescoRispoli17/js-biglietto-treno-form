'use strict';

const button=document.querySelector('#genera');
const reset=document.querySelector('#reset');

button.addEventListener('click', function(){
    const name=document.querySelector('#name').value;
    const km=Number(document.querySelector('#km').value);
    const eta=document.getElementById('eta').value;
    let name_out=document.querySelector('#name-out');
    console.log(name + km + eta);
    let prezzo=(km*0.21).toFixed(2);
    let offer='Biglietto Standard';

    if(eta=='minorenne'){
        prezzo=(prezzo-prezzo/5).toFixed(2);
        offer='20%';
    }
    else if(eta=='over65'){
        prezzo=(prezzo-prezzo/5*2).toFixed(2);
        offer='40%';

    }
    console.log(prezzo)
    name_out.innerText=name;
    document.querySelector('#offer').innerText=offer;
    document.querySelector('#car').innerText=Math.floor(Math.random()*9)+1;
    document.querySelector('#cp').innerText=Math.floor(Math.random()*(99999-10000)+10000);
    document.querySelector('#prezzo').innerText=prezzo;
    document.querySelector('#ticket').classList.add('d-block');
    document.querySelector('#ticket').classList.remove('d-none');

})

reset.addEventListener('click', function(){
    const name=document.querySelector('#name');
    const km=(document.querySelector('#km'));
    name.value='';
    km.value='';
    document.querySelector('#ticket').classList.remove('d-block');
    document.querySelector('#ticket').classList.add('d-none');
})


