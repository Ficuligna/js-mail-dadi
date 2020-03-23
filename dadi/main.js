// ES. di oggi:
// i 2 EX in descrizione
// DESCRIZIONE:
// 2 Gioco dei dadi, chi fa di più vince.



function giocoDadi(){
  var tiroDadiG1 = prompt("premi invio per tirare i dadi");

  tiroDadiG1 = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);

  var tiroDadiG2 = prompt("il tuo risultato è " + tiroDadiG1 + ". Turno del pc. Premi invio.");

  tiroDadiG2 = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);

  var vincitore;

  if (tiroDadiG1 > tiroDadiG2) {
    vincitore = ("il risultato del pc è "+ tiroDadiG2 + ". Hai vinto!");
  }else if (tiroDadiG1 < tiroDadiG2) {
    vincitore = ("il risultato del pc è "+ tiroDadiG2 + ". Hai perso!");
  }else {
    vincitore = ("il risultato del pc è "+ tiroDadiG2 + ". Parità!");
  }

  var restartGame = parseInt(prompt(vincitore + " Premi 1 per giocare ancora, 2 per interrompere il gioco"));

  if (restartGame == 1) {
    return giocoDadi();
  }else if (restartGame == 2) {
    prompt("grazie per aver giocato")
  }else {
    prompt("ma quanto siamo furbi eh?")
  }
}

giocoDadi()
