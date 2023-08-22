export default function esIsograma(string: string): boolean {
  let isograma: boolean = true;
  
  const words = string.split(/\s/);

  if(words.length > 1){
    return false;
  }

  // El string pasado por parametro solo tiene una palabra
  const word = string.toLowerCase();
  
  let i = 0;
  while(i < word.length-1 && !((word.substring(i+1, word.length)).includes(word[i]))){
    i++;
  }
  
  if(i < word.length-1){
    isograma = false;
  }
  
  return isograma;
}


