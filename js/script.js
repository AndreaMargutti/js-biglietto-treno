/* Scaletta Mentale
1. Chiedere età e Km all'utente
2. Definire il prezzo base del biglietto (km * 0.21)
3. Definire gli sconti e quando vengono applicati
    3.1. Calcolare lo sconto per i minorenni (20%)
    3.2 Calcolare lo sconto per gli over 65 (40%)
4. Stampare l'output in console
*/

// # Fase di preparazione
//Recupero elementi html
let pAge = document.getElementById('age');
console.log(pAge);

let pKm = document.getElementById('km');
console.log(pKm);

let pPrice = document.getElementById('price');
console.log(pPrice);

let pDiscount = document.getElementById('discount');
console.log(pDiscount);

let pFinalPrice = document.getElementById('final-price');
console.log(pFinalPrice);

//Creazione variabili per sconti
let minorDiscount;
let seniorDiscount;

// # Fase di raccolta dati
//Richiesta età
const passengerAge = parseInt(prompt('Quanti anni hai?', '20'));
console.log('passengerAge:', passengerAge);

//Richiesta km percorsi
const passengerKm = parseInt(prompt('Quanti km vuoi percorrere?', '100'));
console.log('passengerKm:', passengerKm);

// # Fase di elaborazione dati
//Calcolo prezzo base del biglietto
const ticketPrice = passengerKm * 0.21;
console.log('ticketPrice:', ticketPrice);

//Variabile contente il prezzo finale di base
let finalPrice = ticketPrice;

//Calcolo sconto per minorenni
minorDiscount = Math.round(((ticketPrice * 20 / 100) * 100) / 100);
console.log('minor-discount:', minorDiscount);

//Calcolo sconto per senior (over 65)
seniorDiscount = Math.round(((ticketPrice * 40 / 100) * 100) / 100);
console.log('senior-discount:', seniorDiscount);

//Creazione ciclo if
if (passengerAge >= 18 && passengerAge < 65) {
} else if (passengerAge < 18) {
    finalPrice -= minorDiscount;
} else {
    finalPrice -= seniorDiscount;
}

// ! Prima Versione ciclo if
/* if (passengerAge < 18) {
    //Calcolo dello sconto per i minori
    minorDiscount = ticketPrice * 20 / 100;
    console.log('minor-discount:', minorDiscount);
    finalPrice = ticketPrice - minorDiscount;
} else if (passengerAge >= 65) {
    //Calcolo dello sconto per i senior
    seniorDiscount = ticketPrice * 40 / 100;
    console.log('senior-discount:', seniorDiscount);
    finalPrice = ticketPrice - seniorDiscount;
} */

// # Fase di output
//Prezzo finale in console
console.log('final-price', Math.round(finalPrice *  100) / 100);

//età
pAge.innerText += ` ${passengerAge}`;

//km
pKm.innerText += ` ${passengerKm}`;

//price
pPrice.innerText += ` ${ticketPrice}`;

//discount
if (passengerAge >= 18 && passengerAge < 65) {
} else if (passengerAge < 18) {
    pDiscount.innerText += ` ${minorDiscount}`;
} else {
    pDiscount.innerText += ` ${seniorDiscount}`;
}

//! Prima versione ciclo if
/* if (passengerAge < 18) {
    divDiscount.innerText += ` ${minorDiscount}`;
} else if (passengerAge >= 65) {
    divDiscount.innerText += ` ${seniorDiscount}`;
} else {
    divDiscount.innerText += ' ---' 
} */

//prezzo finale in pagina
pFinalPrice.innerText += ` ${Math.round(finalPrice * 100) / 100}`;