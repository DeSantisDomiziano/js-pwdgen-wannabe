alert(`Salve sono il tuo generatore di password poco sicure, per andare avanti cliccare su "ok"`);

const firstName = prompt(`digiata qui sotto il tuo nome`);
console.log(firstName);
alert(`Ciao ${firstName}! mancano solo due passagi, continua premendo su "ok" oppure il tasto invio`);

const lastName = prompt(`digiata qui sotto il tuo cognome`);
console.log(lastName);
alert(`${lastName}... gran bel cognome, vabbè andiamo avanti`);

let favColor = prompt(`digiata qui sotto il tuo colore preferito`);
console.log(favColor);
alert(`ora che sappiamo che ti chiami ${firstName} ${lastName}e il tuo colore preferito è ${favColor} sei pronto per la tua nuova password?!`);

let password = firstName + lastName + favColor + `23`;
document.getElementById(`password`).innerHTML = password