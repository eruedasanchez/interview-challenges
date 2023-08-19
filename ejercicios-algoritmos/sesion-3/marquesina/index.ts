export default function marquesina(texto: string): string[] {
  let marquesinas: string[] = [];

  let actualText: string = texto;

  for(let i=0; i < texto.length; i++){
    if(i !== 0){
      // En las iteraciones que no son la primera, se toma el ultimo texto que fue agregado al arreglo
      actualText = marquesinas[i-1];
    } 
    
    let arrActualText: string[] = [];
    
    // Se insertan todos los caracteres del texto en un arreglo
    for(let char of actualText){
      arrActualText.push(char);
    }

    // Se swapea el primer caracter del actualText con todos los demsa hasta que llega al final
    for(let idx=0; idx < arrActualText.length - 1; idx++){
      let charTmp = arrActualText[idx];
      arrActualText.splice(idx, 1, arrActualText[idx+1]);
      arrActualText.splice(idx+1, 1, charTmp);
    }
    
    let word: string = arrActualText.toString().replace(/,/gi,'');

    marquesinas.push(word);
  }
  
  return marquesinas;
}

