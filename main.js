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

let numberUser;
let numberPc;








