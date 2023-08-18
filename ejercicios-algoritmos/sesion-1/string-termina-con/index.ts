export default function stringTerminaCon(string: string, final: string): boolean {
  let finishWith = true;
  let idxFinal = final.length - 1;
  let idxString = string.length - 1;
  
  while(idxFinal >= 0 && final[idxFinal] === string[idxString]){
    // Coincidencia entre el caracter de string y final que se esta iterando
    idxFinal--;
    idxString--;
  }
  
  if(idxFinal >= 0){
    // Se terminaron las coincidencias y no se llego a recorrer todo el string final 
    finishWith = false;
  }
  
  return finishWith;
}







