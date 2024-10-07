import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronombre = ["el", "la", "los", "elle"];
  let adjetivo = ["gran", "grande", "fino", "chico"];
  let sustantivo = ["lacasa", "aluminio", "barcos", "canarios"];
  let extencion = [".com", ".net", ".es", ".eu"];

  for (let i = 0; i < pronombre.length; i++) {
    for (let j = 0; j < adjetivo.length; j++) {
      for (let k = 0; k < sustantivo.length; k++) {
        for (let l = 0; l < extencion.length; l++) {
          console.log(
            `${pronombre[i]}${adjetivo[j]}${sustantivo[k]}${extencion[l]}`
          );
        }
      }
    }
  }
};
