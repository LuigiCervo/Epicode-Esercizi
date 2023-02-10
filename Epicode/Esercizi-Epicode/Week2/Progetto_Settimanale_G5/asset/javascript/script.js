function reset(){ 
    let risultato = document.getElementById("risultato") 
    risultato.value = ''
}


function totale() { 
    document.getElementById("risultato").value=eval(document.getElementById("risultato").value); 
    } 

function digitazione(tasto){ 
    let risultato = document.getElementById("risultato")
    let num = tasto.id;
    risultato.value += num 
}