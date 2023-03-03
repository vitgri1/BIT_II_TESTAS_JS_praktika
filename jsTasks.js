console.clear();
/*
1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai) 
*/ 
console.log("-----1-----");
const a = 8;
const b = 2;

if (a > b){
    console.log('a = '+a+' didesnis uz b = '+b);
} else if (a < b){
    console.log('b = '+b+' didesnis uz a = '+a);
} else {
    console.log('a = '+a+' lygus b = '+b);
}
/*
2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
*/
console.log("-----2-----");
for (let i = 1; i<=10; i++){
    console.log(i);
}
/*
3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
*/
console.log("-----3-----");
for (let i = 0; i<=10; i+=2){
    console.log(i);
}
/*
4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
*/
console.log("-----4-----");
for (let i = 0; i<10; i++){
    const rand = Math.floor(Math.random() * 10 + 1);
    console.log(rand);
}
/*
5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
*/
console.log("-----5-----");
let rand = Math.floor(Math.random() * 10 + 1);
while (rand !== 5){
    console.log(rand);
    rand = Math.floor(Math.random() * 10 + 1);
}
console.log(rand);
/*
6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
*/
console.log("-----6-----");
const arr6 = [...Array(Math.floor(Math.random() * 11 + 20))].map(_=> Math.floor(Math.random() * 21 + 10));
let max = 0;
for (n of arr6){
    if (n > max){
        max = n;
    }
}
console.log(max);
/*
7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
*/
console.log("-----7-----");
const arr7 = [];
const result7 = {A:0, B:0, C:0, D:0};
for (let i= 0; i < 100; i++){
    const randNum = Math.floor(Math.random() * 4 + 1);
    switch (randNum) {
        case 1: arr7.push('A');
            result7.A++;
            break;
        case 2: arr7.push('B');
            result7.B++;
            break;
        case 3: arr7.push('C');
            result7.C++;
            break;
        default: arr7.push('D');
            result7.D++;
            break;
    }
}
console.log(arr7, result7);
/*
8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
*/
console.log("-----8-----");
function lygineSuma (num1_8, num2_8){
    if (typeof num1_8 === 'number' && isFinite(num1_8) && typeof num2_8 === 'number' && isFinite(num2_8)){
        const sum8 = num1_8 + num2_8;
        if (sum8 % 2 === 0){
            return sum8;
        } else return 'suma nelyginė';
    }
    if (Array.isArray(num1_8) && Array.isArray(num2_8)){
        const sum8 = num1_8.length + num2_8.length;
        if (sum8 % 2 === 0){
            return sum8;
        } else return 'suma nelyginė';
    }
    return 'netinkami kintamieji';
}

console.log(lygineSuma(8,[8]));
/*
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
*/
console.log("-----9-----");
function pirminisSkaicius(num_9){
    if (typeof num_9 !== 'number' || !isFinite(num_9) || num_9 < 1) return 'ne natūralusis skaičius';
    if (num_9 === 1) return '1 nėra pirminis skaičius, nors ir dalinasi';
    for (i = 2; i < num_9; i++){
        if (num_9 % i === 0) return 'ne pirminis skaičius';
    }
    return 'pirminis skaičius';
}

console.log(pirminisSkaicius(23));
/*
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)
*/
console.log("-----10-----");

function telefonoNumeris (arr10) {
    if (!Array.isArray(arr10)) return 'ne masyvas';
    if (arr10.length !== 10) return 'blogas ilgis';
    for (n of arr10){
        if (typeof n !== 'number' || !isFinite(n) || n < 0 || n > 9){
            return 'bent vienas skaičius buvo blogas';
        }
    }
    return `(${arr10[0]}${arr10[1]}${arr10[2]}) ${arr10[3]}${arr10[4]}${arr10[5]}-${arr10[6]}${arr10[7]}${arr10[8]}${arr10[9]}`
}

console.log(telefonoNumeris([1,2,3,4,5,6,7,8,9,0]));