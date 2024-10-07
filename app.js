let pronombre = ['el', 'la', 'los', 'elle'];
let adjetivo = ['gran', 'grande', 'fino', 'chico'];
let sustantivo = ['lacasa', 'aluminio', 'barcos', 'canarios'];
let extencion = ['.com', '.net', '.es', '.eu'];
  
    for (let i = 0; i < pronombre.length; i= i + 1) {
      for (let j = 0; j < adjetivo.length; j= j + 1) {
        for (let k = 0; k < sustantivo.length; k= k + 1) {
          for (let l = 0; l < extencion.length; l= l + 1) {
            console.log(`${pronombre[i]}${adjetivo[j]}${sustantivo[k]}${extencion[l]}`)
          }
        }
      }
    }