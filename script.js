console.log('OK');

// Recupero elementi dalla pagina

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// Recupero la data di Natale per intero

const christmas = new Date ("Dec 25 2022 00:00:00");
const christmasTime = christmas.getTime();
console.log(christmasTime);

// Imposto funzione che scala ogni secondo

const countdown = setInterval(function() {

    // Recupero la data attuale per intero

    const now = new Date();
    const nowTime = now.getTime();
    console.log(nowTime);

    // Mi calcolo la differenza tra Natale e Ora (il risultato sarà in millisecondi)

    const timeLeft = christmasTime - nowTime;

    // const second = 1000;
    // const minute = second * 60;
    // const hour = minutes * 60;
    // const day = hours * 24;   

   // Imposto le varie formule matematiche che mi vadano a ricavare dai millisecondi i giorni le ore i minuti e i secondi

    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    days.innerText = daysLeft;
    hours.innerText = hoursLeft;
    minutes.innerText= minutesLeft;
    seconds.innerText = secondsLeft;

    if (timeLeft <= 0) {
        clearInterval(countdown);
    }

}, 1000);