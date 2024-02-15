udvozles()      //hoisting, vagy felemelés - hogy a fgv-ek v változók deklarációja úgy működik, mintha azokat a hatókörük tetején hoztuk vna létre --> a saját hatóköre ez a fájl!

function udvozles(){
    console.log("Jó reggelt mindenkinek!")
}

// változók létrehozása/deklarációja
// var let const ---> hatókört jelentenek, - hol láthatók az egyes változók
// var a régi
var szam = 2
let nev ="Jenő"

console.log(szam + "típusa: " + typeof szam)
console.log(`${szam} típusa: ${typeof szam}`)   //AltGr + 7 -----> ez az idézőjel kell!!!
console.log(nev + "típusa: " + typeof nev)

function elagazas(){
    /* Írj kódot, ami a szam változóról eldönti, hogy
    0, páros, páratlan */
    // a == két értéket hasonlít össze
    // === a két értéket és a két típust is összehasonlítja

    if (szam===0) {
        console.log(`a ${szam} valtozó értéke 0`)
    }else if (szam % 2===0){
        console.log(`a ${szam} valtozó értéke páros`)
    }else if(szam % 2 ===1){
        console.log(`a ${szam} valtozó értéke páratlan`)
    }
}

function ciklus1(){
    // Írjuk ki a console-ra 10*, hogy "Szép nap van!"

    for (let index = 0; index < 10; index++) {
        console.log("Szép nap van!") //így nem írja ki 10*, hanem jelzi, fent egy kis 10-essel
        //de ha elé rakjuk az adott indexet(ami ugye változik), akk kiírja:
        console.log(`${index}. Szép nap van!`)       
    }
}

function ciklus2(){
    // Írjuk ki a console-ra 10*, hogy "Szép nap van!" while ciklussal

    let index = 0;
    while (index < 10) {                //számlálós ciklus esetén a while meg a for ugyan az
        console.log(`${index}. Szép nap van!`);
        index++;     
    }
}

