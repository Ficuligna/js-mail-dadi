// ES. di oggi:
// i 2 EX in descrizione
// DESCRIZIONE:
// 1 Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;


var utentiInvitati = [ "marco1@gmail.com", "marco2@gmail.com", "marco3@gmail.com", "marco4@gmail.com", "marco5@gmail.com", "marco6@gmail.com", "marco7@gmail.com", "marco8@gmail.com"];

var controlloInvito = prompt("inserisci la tua email");

for (var i = 0; i < utentiInvitati.length; i++) {
  if (controlloInvito == utentiInvitati[i]) {
      document.getElementById("ciao").innerHTML = "Prosegui"
      break
  }
  else {
    document.getElementById("ciao").innerHTML = "Non puoi proseguire"
  }
}
