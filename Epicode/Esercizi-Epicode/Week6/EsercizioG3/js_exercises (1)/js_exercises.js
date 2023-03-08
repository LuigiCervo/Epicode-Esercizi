/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dichiara una variabile di nome "myself" e assegnale come valore il tuo nome.
*/
let mySelf = "Luigi";

console.log(mySelf);
/* ESERCIZIO 2
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish", "chinchilla"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 3
    Scrivi del codice per aggiungere all'array pets un nuovo elemento.
*/
let newAnimal = "Wolf";
pets.push(newAnimal);

console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per rimuovere dall'array pets l'ultimo elemento aggiunto.
*/

pets.pop();

console.log(pets);

/* ESERCIZIO 5
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const reversed = pets.reverse();

console.log(reversed);
/* ESERCIZIO 6
    Cicla gli elementi dell'array pets, e stampa true in console se l'animale comincia con la lettera "c". Stampa false in caso contrario.
*/
for (let i = 0; i < pets.length; i++)
  if (pets[i].startsWith("c")) {
    console.log(true);
  } else {
    console.log(false);
  }

/* ESERCIZIO 7
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "DZ896KA";
}

console.log(cars);

/* ESERCIZIO 8
    Scrivi una funzione per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Alla fine dell'esecuzione, la funzione dovrà ritornare la nuova lunghezza dell'array cars.
*/

const newObj = {
  brand: "Fiat",
  model: "Panda",
  color: "black",
  trims: ["life", "style", "r-line"],
  licensePlate: "DZ869KA",
};

cars.push(newObj);
console.log(cars);

/* ESERCIZIO 9
    Scrivi una funzione per per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justFirstTrims", sotto definito.
*/
let justFirstTrims = [];

for (let i = 0; i < cars.length; i++) {
  justFirstTrims.push(cars[i].trims[0]);
}
console.log(justFirstTrims);

/* ESERCIZIO 10
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console.
    Se la lunghezza del valore della proprietà "color" è uguale o minore di 4, mostra in console "Fizz".
    Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.length <= 4) {
    console.log(i + " Fizz");
  } else {
    console.log(i + " Buzz");
  }
}

/* ESERCIZIO 11
    Utilizza il metodo .filter() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    solamente le auto che hanno più di 2 trims disponibili.
*/

const filteredCars = cars.filter(function (filterdCar) {
  return filterdCar.trims.length > 2;
});
console.log(filteredCars);

/* ESERCIZIO 12
    Utilizza il metodo .map() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    stringhe formate nel seguente modo: "Ford Fiesta", "Peugeot 208" etc.
*/
let newString = cars.map((car) => {
  return `${car.brand} ${car.model}`;
});

console.log(newString);

/* ESERCIZIO 13
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let i = 0;

while (numericArray[i] != 32) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 14
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      console.log(1);
      break;
    case "b":
      console.log(2);
      break;
    case "c":
      console.log(3);
      break;
    case "d":
      console.log(4);
      break;
    case "e":
      console.log(5);
      break;
    case "f":
      console.log(6);
      break;
    case "g":
      console.log(7);
      break;
    case "h":
      console.log(8);
      break;
    case "i":
      console.log(9);
      break;
    case "j":
      console.log(10);
      break;
    case "k":
      console.log(11);
      break;
    case "l":
      console.log(12);
      break;
    case "m":
      console.log(13);
      break;
    case "n":
      console.log(14);
      break;
    case "o":
      console.log(15);
      break;
    case "p":
      console.log(16);
      break;
    case "q":
      console.log(17);
      break;
    case "r":
      console.log(18);
      break;
    case "s":
      console.log(19);
      break;
    case "t":
      console.log(20);
      break;
    case "u":
      console.log(21);
      break;
    case "v":
      console.log(22);
      break;
    case "w":
      console.log(23);
      break;
    case "x":
      console.log(24);
      break;
    case "y":
      console.log(25);
      break;
    case "z":
      console.log(26);
      break;
  }
}
