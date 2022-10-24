// // Vypsání řetězce a jednoduchého výpočtu do konzole
// console.log("Hello world")
// console.log(3+4*5)

// //Ukázka proměnných a aritmetiky
// let cislo1 = 42
// console.log(cislo1)
// cislo1 = -13
// console.log(cislo1)
// let cislo2 = 7.3
// console.log(cislo1/4)
// let retezec = "Two households"
// console.log(retezec)

// let cislo1 = 10
// let cislo2 = 4
// let cislo3 = cislo1 + cislo2
// console.log(cislo3)

// let retezec1 = "Hello"
// let retezec2 = "world"
// let retezec3 = retezec1 + " " + retezec2
// console.log(retezec3)

// console.log(12+34)
// console.log("12"+"24")
// console.log("12"+24)

// let vstup = prompt("Jakpak se jmenuješ?")
// console.log("Ahoj, jmenuješ se " + vstup + ".")

// let vekRetezec = prompt("Kolik je ti let?")
// let vekCislo = Number(vekRetezec)
// console.log("Přístí rok ti bude: " + (vekCislo + 1) + ".")

// let cislo = -10

// if (cislo > 0) {
//     console.log("Číslo je kladné.")
// }
// else {
//     console.log("Číslo je záporné.")
// }

// let vstup = Number(prompt("Kolik je hodin?"))
// if (vstup > 24){
//     console.log("Takový čas už není.")
// }
// else if (vstup > 12){
//     console.log("Je odpoledne nebo večer.")
// }
// else if (vstup < 12){
// console.log("Je dopoledne.")
// }
// else if (vstup === 12){
// console.log("Je poledne.")
// }

//tady někde by mělo být else ještě//

// for(let pocitadlo = 0; pocitadlo < 5; pocitadlo++){
//     console.log("Ahoj" + pocitadlo + 3)
//     }

// Vypište všechna lichá čísla mezi 0 a 10
// if (cislo % 1 === 0)

// for(let pocitadlo = 0; pocitadlo < 11; pocitadlo++){
//     if (pocitadlo % 2 === 1)
//     console.log("Ahoj" + pocitadlo)
// }

// function pozdravUzivatele (){
//   let jmeno = prompt("Jak se jmenujes?");
//   console.log("Ahoj, jmenuješ se: " + jmeno) }

// Aritmetický průměr 3 čísel:
//  function aritmetickyPrumer(cislo1, cislo2, cislo3) {
//     let vysledek = (cislo1 + cislo2 + cislo3) / 3;
//     return vysledek;
// }

// let prumer1 = aritmetickyPrumer(-2, 4, 6);
// let prumer2 = aritmetickyPrumer(2, 3.5, 5);

// console.log(prumer1)
// console.log(prumer2)

// // Zaokrouhlování čísel
// console.log(Math.round(13.6))

// // Zaokrouhlování vždy nahoru
// console.log(Math.ceil(13.6))

// //Zaokrouhlování vždy dolů
// console.log(Math.floor(13.6))

// //Odmocnina
// console.log(Math.sqrt(13.6))

// //Vrací náhodné desetinné číslo 0-1 (nula to být může, 1 nikdy)
// console.log(Math.random())

// //funkce délka přepony c2 = a2 + b2
// function delkaPrepony(stranaA, stranaB){
//     let vysledek = Math.sqrt(stranaA * stranaA + stranaB * stranaB)
//     return vysledek
// }
// console.log(delkaPrepony(3, 4));
// console.log(delkaPrepony(6, 8));

// //Hod kostkou
// function hodKostkou(pocetSten){
// let vysledek = Math.floor(Math.random()*pocetSten) + 1
// return vysledek}
// console.log(hodKostkou(100))

// // Vypište do konzole řetězec znak po znaku.
//     let retezec = "Reactgirls"
//     for (let i = 0; i < retezec.length; i++) {
//         console.log(retezec.charAt(i))
//     }

// // Vypište do konzole řetězec odzadu znak po znaku.
//     let retezec = "Reactgirls"
//     for (let i = retezec.length; i > -1; i --) {
//         console.log(retezec.charAt(i))
//     }

// let x = 10
// console.log(x)
// x = 21
// console.log(x)

// // vezme 21 - 5 = to první X, které vypíše
// x = x - 5
// console.log(x)

// // Vypište do konzole řetězec odzadu vcelku.
//  let r2 = ""
//  r2 = r2 + "s"
//  r2 = r2 + "l"  
//  r2 = r2 + "r" 
//  r2 = r2 + "i" 
//  r2 = r2 + "g" 
//  console.log(r2)
// let retezec = "Reactgirls"
// let retezecObracene = ""
// for (let i = retezec.length -1; i > -1; i--)
// retezecObracene = retezecObracene + retezec.charAt (i)
// console.log(retezec.charAt) ????

// Vypište z pole čísel pouze sudá.
// let pole = [12, 5, -7, 0, 33, 4]
// for(let i = 0; i < pole.length; i++){
//     let prvek = pole[i]
//     if (prvek % 2 === 0){
//         console.log(prvek)
//     }
// }

// // Vypište obsah pole odzadu.
// let pole = [12, 5, -7, 0, 33, 4, -10]
// let minimum = pole[0]
// for (let i = 1; i < pole.length; i++) {
//     if (pole[i] < minimum) {
//         minimum = pole[i]
//     }
// }
// console.log(minimum)

// Lze i takto:
let pole = [12, 5, -7, 0, 33, 4, -10]
let minimum = undefined
for (let i = 0; i < pole.length; i++) {
    if (minimum === undefined || pole[i] < minimum) {
        minimum = pole[i]
    }
}
console.log(minimum)
