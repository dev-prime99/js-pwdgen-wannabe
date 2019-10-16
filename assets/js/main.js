
              // INPUT

// NOME
var nome = prompt("Scrivi il tuo nome");

// COGNOME
var cognome = prompt("Scrivi il tuo cognome");

// COLORE PREFERITO
var colore = prompt("Scrivi il tuo colore preferito");

              // OUTPUT

// INIZIO
document.getElementById('ciao').innerHTML ="Ciao";

document.getElementById('nome').innerHTML = nome;

document.getElementById('cognome').innerHTML = cognome;

document.getElementById('gen').innerHTML ="la tua nuova PASSWORD generata è:";

// NUMERO RANDOM
var num = Math.floor(Math.random() * 100) + 1;

// PASSWORD
var password = nome + cognome + colore + num;

var htmlElement = document.getElementById('password');

htmlElement.innerHTML = password;
