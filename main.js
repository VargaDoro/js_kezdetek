import { kutyaLista } from "./adat.js";

/*HTML - maniouláció
HTML DOM - leképezi a htmlt egy documet object szerkezetbe
*/

let koszonElem = document.getElementById("koszon");
console.log(koszonElem);
koszonElem.innerHTML = "szép az élet";

/* article elembe írd bele egy h2 es tagbe az első kutya nevét */

let kutyaNev = document.getElementById("art");
let txt = "";
for (let i = 0; i < kutyaLista.length; i++) {
    txt += `<div class = "kutya">
                        <h2>${kutyaLista[i].nev}</h2>
                        <p>${kutyaLista[i].nem}</p>
                        <p>${kutyaLista[i].kor}</p>
                        <p>${kutyaLista[i].suly}</p>
                    </div>`
    
}
kutyaNev.innerHTML = txt
