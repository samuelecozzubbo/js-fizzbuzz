/* Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

//inizializzazione variabile
let output;
//Chiamata container
const container = document.querySelector(".container");

for (let i = 1; i <=100; i++){
    if(i % 3 === 0 && i % 5 === 0) { //controllo multipli di 3 e 5
        output = "FizzBuzz";
    } else if (i % 5 === 0) { //controllo multipli di 5
        output = "Buzz"; 
    } else if (i % 3 === 0) { //controllo multipli di 3
        output = "Fizz";
    } else {
        output = i;
    }

    //Stampa numeri nella console
    console.log(output);

    /* Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare. */
    let square = document.createElement("div");

    square.append(output);

    container.appendChild(square);
    //Diamo a tutti gli square una classe square
    square.classList.add("square");
    //aggiungiamo una classe a square in base al numero di cui è multiplo
    if (output === i) {
        square.classList.add("not-divisible");
    } else if (output === "FizzBuzz") {
        square.classList.add("divisible-by-3-5");
    } else if (output === "Buzz") {
        square.classList.add("divisible-by-5");
    } else if (output === "Fizz") {
        square.classList.add("divisible-by-3");
    }
    
}