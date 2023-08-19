export default function contarDuplicados(texto: string): number {
  let duplicatesWithoutRepeats: string[] = [];

  const lowerString = texto.toLowerCase();

  for(let i=0; i < lowerString.length-1; i++){
    if(lowerString.substring(i+1, lowerString.length).includes(lowerString[i]) && !duplicatesWithoutRepeats.includes(lowerString[i])){
      duplicatesWithoutRepeats.push(lowerString[i]);
    }
  }
  
  return duplicatesWithoutRepeats.length;
}






