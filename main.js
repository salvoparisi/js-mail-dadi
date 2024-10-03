let mail;
let mailVerify=0;
let mailAccess = ["pincopallino@gmail.com","cicciopalla@gmail.com","alfonso@gmail.com"];
mail=prompt("Scrivi la tua email")
mailLenght = mailAccess.length;

for(let i=0; i<mailLenght; i++){
    if(mail==mailAccess[i]){
        mailVerify++;
    }
}
if(mailVerify==1){
    console.log("Puoi entrare");
}else{
    console.log("Non puoi entrare");
    throw new Error("Accesso negato!");
}

let numberUser = Math.floor(Math.random() * 6) + 1;;
let numberPc = Math.floor(Math.random() * 6) + 1;

console.log(`Il tuo numero è ${numberUser}`);
console.log(`Il mio numero è ${numberPc}`);

if(numberUser>numberPc){
    console.log("Hai vinto tu!");
}else if (numberPc>numberUser){
    console.log("Ho vinto io!");
}else{
    console.log("Pareggio!");
}












