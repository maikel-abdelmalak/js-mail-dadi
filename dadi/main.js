// creo due numeri random tra 1 e 6
var rossa = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
console.log('la squadra rossa' + rossa);

var verde = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
console.log('la squadra verde' + verde);

//chiedo all'utente se vuole giocare con la squadra rossa o la squadra
var scelta_utente = prompt('scegli la squadra rossa o la squadra verde', 'rossa o verde');

// se l'utente sceglie la squadra con il numero più alto vince altrimenti vince il pc
if (scelta_utente == 'rossa' && rossa > verde){
    console.log('hai vinto');
    document.getElementById('si').setAttribute('class', 'visible');
}else if (scelta_utente == 'verde' && verde > rossa) {
    console.log('hai vinto');
    document.getElementById('si').setAttribute('class', 'visible');
}else{
    console.log('hai perso');
    document.getElementById('no').setAttribute('class', 'visible');
}
