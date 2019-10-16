
              // INPUT

// NOME
var nome = prompt("Scrivi il tuo nome");

// COGNOME
var cognome = prompt("Scrivi il tuo cognome");

// COLORE PREFERITO
var colore = prompt("Scrivi il tuo colore preferito");

              // OUTPUT

// INIZIO
var ciao = "Ciao";
var htmlElement = document.getElementById('ciao');
htmlElement.innerHTML = ciao;

var nome2 = nome;
var htmlElement = document.getElementById('nome');
htmlElement.innerHTML = nome;

var cognome = cognome;
var htmlElement = document.getElementById('cognome');
htmlElement.innerHTML = cognome;

var gen = "la tua nuova PASSWORD generata è:"
var htmlElement = document.getElementById('gen');
htmlElement.innerHTML = gen;

// NUMERO RANDOM
var num = Math.floor(Math.random() * 100) + 1;

// PASSWORD
var password = nome + cognome + colore + num;

var htmlElement = document.getElementById('password');

htmlElement.innerHTML = password;
