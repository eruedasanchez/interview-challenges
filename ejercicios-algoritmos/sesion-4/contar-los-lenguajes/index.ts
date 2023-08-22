import type { Developer } from "./types";

export default function contarLosLenguajes(developers: Developer[]): Record<string, number> {
  let languages: Record<string, number> = {};

  for(const dev of developers){
    if(!Object.keys(languages).includes(dev.language)){
      // El lenguaje no esta definido como clave del objeto 
      languages[dev.language] = 1;
      } else {
      languages[dev.language] += 1;
      }
  }
  
  return languages;
}
