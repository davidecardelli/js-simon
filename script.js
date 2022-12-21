// Recupero elementi dalla pagina

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');



// Imposto funzione che scala ogni secondo

const countdown = () => {

    // Recupero la data di Natale per intero
    const christmas = new Date ("Dec 25 2022 00:00:00");
    const christmasTime = christmas.getTime();

    // Recupero la data attuale per intero
    const now = new Date();
    const nowTime = now.getTime();

    // Mi calcolo la differenza tra Natale e Ora (il risultato sarà in millisecondi)
    const timeLeft = christmasTime - nowTime;
    console.log(timeLeft);

    // Imposto delle variabili con minuti secondi etc...
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;   

   // Imposto le varie formule matematiche che mi vadano a ricavare dai millisecondi i giorni le ore i minuti e i secondi
    const daysLeft = Math.floor(timeLeft / day);
    const hoursLeft = Math.floor((timeLeft % day) / hour);
    const minutesLeft = Math.floor((timeLeft % hour) / minute);
    const secondsLeft = Math.floor((timeLeft % minute) / second);

    // Stampo in pagina
    days.innerText = daysLeft;
    hours.innerText = hoursLeft;
    minutes.innerText= minutesLeft;
    seconds.innerText = secondsLeft;

    if (timeLeft < 0) {
        clearInterval(countdown)
        days.innerText = '0';
        hours.innerText = '0';
        minutes.innerText= '0';
        seconds.innerText = '0';
    }


};

countdown();
setInterval(countdown, 1000);