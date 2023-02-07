const pgreco = '3.14';
var Aldo = 'Aldo,';
{
    let cliente = 'cliente,';

var  passo2 = Aldo + ' ' + cliente + ' ' + pgreco;

document.getElementById('concatena').innerHTML = Aldo + ' ' + cliente + ' ' + pgreco;
document.getElementById('concatena2').innerHTML = passo2;

}

var nome1 = 'Mario';
{
let nome1 = 'Carla';
 
document.getElementById('let').innerHTML = nome1;
document.getElementById('let3').innerHTML = nome1;
document.getElementById('final2').innerHTML = nome1;
}
document.getElementById('var').innerHTML = nome1;
document.getElementById('final').innerHTML = nome1;
document.getElementById('let2').innerHTML = nome1;

var numero = 15;
var plus = numero + numero;
var minus = numero - 5;

document.getElementById('iniziale').innerHTML  += numero;
document.getElementById('valore1').innerHTML += plus + ',' + ++plus ;
document.getElementById('valore2').innerHTML += minus +  ',' + --minus ;
document.getElementById('valore3').innerHTML += numero * 3 + ',';
document.getElementById('valore4').innerHTML += numero / 3 + ',';
document.getElementById('valore5').innerHTML += numero + ' è un numero';