//iniziamo a introdurre le variabili
let mail;
let mailVerify=0; // questo elemento ci servirà per capire se la mail dell'utente è una di quelle nell'array
let mailAccess = ["pincopallino@gmail.com","cicciopalla@gmail.com","alfonso@gmail.com"];
mail=prompt("Scrivi la tua email")
mailLenght = mailAccess.length;

for(let i=0; i<mailLenght; i++){
    if(mail==mailAccess[i]){
        mailVerify++; //se c'e una mail uguale ad almeno un elemento dell'array, il valore aumenta di 1 
    }
}
if(mailVerify>0){
    console.log("Puoi entrare");
}else{
    console.log("Non puoi entrare");
    throw new Error("Accesso negato!"); //nel caso la mail non corrisponde a nessuna dell'array il codice da un errore e non prosegue 
}
//con questo sistema potremmo aggiungere quante email vogliamo nell'array senza manomettere il codice

let numberUser = Math.floor(Math.random() * 6) + 1;;  //genera un numero casuale tra 0 e 1, lo moltiplica per 6 e lo arrotonda
let numberPc = Math.floor(Math.random() * 6) + 1;     //infine aggiungiamo un +1 in modo che i valori vadano da 1 a 6

console.log(`Il tuo numero è ${numberUser}`);
console.log(`Il mio numero è ${numberPc}`);

if(numberUser>numberPc){
    console.log("Hai vinto tu!");
}else if (numberPc>numberUser){
    console.log("Ho vinto io!");
}else{
    console.log("Pareggio!");
}












