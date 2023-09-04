/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Tipi di datatype in javascript: stringhe ("ciao"), numeri (6,3,45.56), valori booleani (true,false), indefiniti (undefined), nulli (null), oggetti, simboli. */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/


let Name = "Eros"
console.log(Name)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number1 = 12
let number2 = 20
let number3 = number1 + number2
console.log("risultato es 3:", number3)
// oppure
console.log("alternativa es. 3:", 12 + 20)
// oppure
console.log("alternativa es. 3:", number2 += number1)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

Name = "Savogin"
const surname = "Savogin"
// surname = "Rossi" errore in console, una costante avrà sempre e solo il valore iniziale


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x
console.log("risultato es. 6:", sottrazione)
// oppure
console.log("alternativa es. 6:", 4 - x)
// oppure
let risultatoSottrazione = sottrazione
console.log("alternativa es. 6", risultatoSottrazione)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john"
let name2 = "JOHN"

let verifica = name1 !== name2 //true: non sono uguali
console.log(verifica)
// oppure
console.log(name1 === name2) //false:non sono uguali

name1 = name1.toLowerCase()
name2 = name2.toLowerCase()
console.log("es extra:", name1 === name2)

// oppure non cambiando il valore di name2, quindi utilizzando una funzione.

name1 = "john"
name2 = "JOHN"

operazione = name1.toLowerCase() === name2.toLowerCase()
console.log("es. extra:", operazione)
// però anche in questo caso ho creato una variabile e ho riassegnato il valore di name2

// la soluzione migliore è loggare direttamente l'uguaglianza nella console, senza riassegnare nessun valore alle variabili
console.log(name1.toLowerCase() === name2.toLowerCase())

console.log(name2)

// ---------------------------------------piccola osservazione:

console.log(name2.toLowerCase())
console.log(name2)

//name2 è ancora uguale a JOHN perchè ho semplicemente loggato la variabile in minuscolo, non le ho riassegnato un valore