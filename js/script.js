/* Scaletta Mentale
1. Chiedere età e Km all'utente
2. Definire il prezzo base del biglietto (km * 0.21)
3. Definire gli sconti e quando vengono applicati
    3.1. Calcolare lo sconto per i minorenni (20%)
    3.2 Calcolare lo sconto per gli over 65 (40%)
4. Stampare l'output in console
*/

// # Fase di preparazione

// # Fase di raccolta dati
//Richiesta età
const passengerAge = parseInt(prompt('Quanti anni hai?', '20'));
console.log('passengerAge:', passengerAge);

//Richiesta km percorsi
const passengerKm = parseInt(prompt('Quanti km vuoi percorrere?', '100'));
console.log('passengerKm:', passengerKm);

// # Fase di elaborazione dati
//Calcolo prezzo base del biglietto
let ticketPrice = passengerKm * 0.21;
console.log('ticketPrice:', ticketPrice);

//creazione ciclo if

if (passengerAge < 18) {
    //Calcolo dello sconto per i minori
    const minorDiscount = ticketPrice * 20 / 100;
    console.log('minor-discount:', minorDiscount);
    ticketPrice -= minorDiscount;
    console.log('price-minor:', ticketPrice);
} else if (passengerAge >= 65) {
    //Calcolo dello sconto per i senior
    const seniorDiscount = ticketPrice * 40 / 100;
    console.log('senior-discount:', seniorDiscount);
    ticketPrice -= seniorDiscount;
    console.log('price-senior:', ticketPrice)
}

console.log(ticketPrice);