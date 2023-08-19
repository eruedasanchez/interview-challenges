import type { Emocion } from "./types";

export default function ordenarEmociones(emociones: Emocion[], orden: boolean): Emocion[] {
  if(emociones.length === 0){
    return [];
  }

  let emotions: Emocion[] = [];
  let superHappy: Emocion[] = [];
  let happy: Emocion[] = [];
  let normal: Emocion[] = []; 
  let sad: Emocion[] = [];
  let superSad: Emocion[] = [];

  for(const em of emociones){
    switch (em) {
      case ":D":
        superHappy.push(em);
        break;
      
      case ":)":
        happy.push(em);
        break;
      
      case ":|":
        normal.push(em);
        break;

      case ":(":
        sad.push(em);
        break;

      case "T_T":
        superSad.push(em);
        break;
    
      default:
        break;
    }

  }

  if(orden){
    // orden ascendente
    emotions = superHappy.concat(happy.concat(normal.concat(sad.concat(superSad))));
  } else {
    // orden descendente
    emotions = superSad.concat(sad.concat(normal.concat(happy.concat(superHappy))));
  }

  return emotions;
}
