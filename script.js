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

// Recupero la data attuale per intero

const now = new Date();
const nowTime = now.getTime();
console.log(nowTime);