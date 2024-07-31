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
let divAge = document.getElementById('age');
console.log(divAge);

let divKm = document.getElementById('km');
console.log(divKm);

let divPrice = document.getElementById('price');
console.log(divPrice);

let divDiscount = document.getElementById('discount');
console.log(divDiscount);

let divFinalPrice = document.getElementById('final-price');
console.log(divFinalPrice);

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

//variabile contente il prezzo finale (con sconto se presente)
let finalPrice = ticketPrice;
let minorDiscount;
let seniorDiscount;

//creazione ciclo if

if (passengerAge < 18) {
    //Calcolo dello sconto per i minori
    minorDiscount = ticketPrice * 20 / 100;
    console.log('minor-discount:', minorDiscount);
    finalPrice = ticketPrice - minorDiscount;
} else if (passengerAge >= 65) {
    //Calcolo dello sconto per i senior
    seniorDiscount = ticketPrice * 40 / 100;
    console.log('senior-discount:', seniorDiscount);
    finalPrice = ticketPrice - seniorDiscount;
}

// # Fase di output
//Prezzo finale
console.log('final-price', Math.round(finalPrice *  100) / 100);

//età
divAge.innerText += ` ${passengerAge}`;

//km
divKm.innerText += ` ${passengerKm}`;

//price
divPrice.innerText += ` ${ticketPrice}`;

//discount
if (passengerAge < 18) {
    divDiscount.innerText += ` ${minorDiscount}`;
} else if (passengerAge >= 65) {
    divDiscount.innerText += ` ${seniorDiscount}`;
} else {
    divDiscount.innerText += ' ---' 
}

//prezzo finale

divFinalPrice.innerText += ` ${finalPrice}`;