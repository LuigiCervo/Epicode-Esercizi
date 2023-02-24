/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var numero1 = 17;
var numero2 = 12;

if(numero1 > numero2){
  document.getElementById('ese1').innerHTML = numero1;
}

else if(numero1 < numero2){
  document.getElementById('ese1').innerHTML = numero2;
}
else  document.getElementById('ese1').innerHTML = 'i numeri sono uguali'



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var numero1 = 17;

if(numero1 != 5){
  document.getElementById('ese2').innerHTML = 'not equal';
}

else
  document.getElementById('ese2').innerHTML = 'equal';

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var numero1 = (15 % 5);

if(numero1==0){
  document.getElementById('ese3').innerHTML = 'divisibile per 5';
}

else
  document.getElementById('ese3').innerHTML = 'non è divisibile per 5';


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var numero1 = 8;
var numero2 = 6;

if(numero1 + numero2==8||numero1 - numero2==8||numero1==8||numero2==8){
  document.getElementById('ese4').innerHTML = 'verificato'; 
}
else
  document.getElementById('ese4').innerHTML = 'non verificato';

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var totalShoppingCart = 30;

if(totalShoppingCart > 50)
document.getElementById('ese5').innerHTML = totalShoppingCart;

else
document.getElementById('ese5').innerHTML = totalShoppingCart + 10;

 

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var totalShoppingCart = 30;
var saldo  = (totalShoppingCart * 20) / 100

if(totalShoppingCart > 50)
document.getElementById('ese6').innerHTML = totalShoppingCart - saldo

else
document.getElementById('ese6').innerHTML = totalShoppingCart - saldo + 10 ;



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var variabile1 = 3
var variabile2 = 2
var variabile3 = 1

if(variabile1 > variabile2 > variabile3){
 document.getElementById('ese7').innerHTML = variabile1 + ' ' + variabile2 + ' ' + variabile3 + '.'}
else if(variabile1 < variabile2 > variabile3){
 document.getElementById('ese7').innerHTML = variabile2 + ' ' + variabile1 + ' ' + variabile3 + '.'}
else
document.getElementById('ese7').innerHTML = variabile3 + ' ' + variabile2 + ' ' + variabile1 + '.'


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var numero = 8;
if(typeof(numero)==='number'){
document.getElementById('ese8').innerHTML = 'è un numero';
} else{
  document.getElementById('ese8').innerHTML = 'non è un numero';
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
var numero1 = 20;

if(numero1 % 2==0){
  document.getElementById('ese9').innerHTML = 'pari';
}

else
  document.getElementById('ese9').innerHTML = 'dispari';

/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 17;
if (val < 5) {
  document.getElementById('ese10').innerHTML = ("Meno di 5");
  } else if (val < 10) {
    document.getElementById('ese10').innerHTML = ("Meno di 10");
  } else {
    document.getElementById('ese10').innerHTML = ("Uguale a 10 o maggiore");
  }



/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/ 

/* SCRIVI QUI LA TUA RISPOSTA */


const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Tornoto';

document.getElementById('ese11').innerHTML = me.name + ' '+ me.lastName + ' '+ me.skills + ' '+ me.city;

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName

document.getElementById('ese12').innerHTML = me.name + ' '+ me.lastName + ' '+ me.skills + ' '+ me.city;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
 
me.skills.pop();

document.getElementById('ese13').innerHTML = me.name + ' '+ me.lastName + ' '+ me.skills + ' '+ me.city;
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var array = [];

array.push('1','2','3','4','5','6','7','8','9','10');


document.getElementById('ese14').innerHTML = array;



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array.splice(9,1,'100');

document.getElementById('ese15').innerHTML = array; 