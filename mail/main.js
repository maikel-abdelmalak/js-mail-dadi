// creo array contenente mail autorizzate
var mail_autorizzate = ['maikel22@hotmail.it', 'maikel.abdelmalak@gmail.it', 'maikel.abdelmalak@aconnect.net', 'marco070502@outlook.it', 'simone.sannino@gmail.com'];

//chiedo all'utente di inserire il proprio indirizzo mail
var mail_utente = prompt ('inserisci la tua mail');

//inizializzo una variabile per segnalare la presenza o meno della mail
var controllo = 0;

// confronto la mail_utente con tutte le mail presenti nell'array
for (var i = 0; i < mail_autorizzate.length; i++){
    if (mail_utente == mail_autorizzate[i]){
        controllo = 1;
        i = mail_autorizzate.length;
    }
}

// restituisco il risultato
if(controllo == 1){
    console.log('accesso consentito');
}else{
    console.log('mail errata');
}
