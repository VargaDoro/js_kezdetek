//alert("Szép nap van!")
console.log("szia");

/*adatszerkezetek
vezérlőszerkezetek
*/

var szoveg1 = "első";
let szoveg2 = "2";
const szoveg3 = "haramdik";

/* const állandó, értéke nem változtatható meg */

let vmi = 2;

console.log(vmi + 2);
console.log(typeof vmi);
console.log(typeof szoveg2);
console.log(szoveg2 * 5);
console.log(Number(szoveg2) + 2);

let vaneJoKedvem = true;
console.log(vaneJoKedvem);

let a;
console.log(2 * a);

let lista = [];
lista = [12, 34, 34, 12, 10];
console.log(lista);
console.log(typeof lista);

if (lista[0] % 2 === 0) {
  console.log("paros");
} else {
  console.log("páratlan");
}

let valt = "2";
if (valt === 2) {
  console.log("jó");
} else {
  console.log("nemjó");
}

let hetNapja = 2;
switch (hetNapja) {
  case 1:
    console.log("hétfő");
    break;
  case 2:
    console.log("kedd");
    break;
  case 3:
    console.log("szerda");
    break;
  default:
    console.log("ez nem nap");
    break;
}

if (hetNapja === 1) {
  console.log("hétfő");
} else if (hetNapja === 2) {
  console.log("kedd");
} else {
  console.log("nem nap");
}

/*ciklusok

elöltesztelős: while*/

let i = 0;
while (i < lista.length) {
  console.log(lista[i]);
  i++;
}

for (let index = 0; index < lista.length; index++) {
  console.log(lista[index]);
}

/*ojektumok osztályok nélkül*/

let kutya1 = {
  nev: "Morzsa",
  nem: "kan",
  kor: 12,
  suly: 25,
};

let kutyaLista = [
  {
    nev: "Morzsa",
    nem: "kan",
    kor: 12,
    suly: 25,
  },
  {
    nev: "Dézi",
    nem: "szuka",
    kor: 7,
    suly: 20,
  },
  {
    nev: "Drogo",
    nem: "kan",
    kor: 7,
    suly: 35,
  },
];

console.log(kutyaLista[0].nev);

/*
0. hány kutyánk van?
1. mennyi a kutyák átlag életkora?
2. hány kan kutya van?
3. legnagyobb súlyu kutya neve? */

function feladat0(lista) {
  return lista.length;
}

let db = feladat0(kutyaLista);

console.log("0. feladat: ");
console.log("A kutyák száma: " + db);
console.log(`A kutyák száma: ${db}`);

function feladat1(lista) {
  let atlag = 0;
  for (let index = 0; index < lista.length; index++) {
    atlag += lista[index].kor;
  }
  let kora = atlag / lista.length;
  return kora;
}

let atlagKor = feladat1(kutyaLista);

console.log("1. feladat: ");
console.log("A kutyák átlag életkora: " + atlagKor);

function feladat2(lista) {
  let kan = 0;
  for (let index = 0; index < lista.length; index++) {
    if (lista[index].nem === "kan") {
      kan += 1;
    }
  }
  return kan;
}

let kanKutya = feladat2(kutyaLista);
console.log("2. feladat: ");
console.log("A kan kutyákból ennyi van: " + kanKutya);

function feladat3(lista) {
  let sulyk = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[sulyk].suly < lista[i].suly) {
      sulyk = i;
    }
  }
  return sulyk;
}

let sulyNev = feladat3(kutyaLista);
console.log("3. feladat: ");
console.log("A legsúlyosabb kutya neve: " + kutyaLista[sulyNev].nev);
