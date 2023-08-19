type DataNumber = {
  value: number;
  ocurrences: number;
};

export default function encontrarImpar(numeros: number[]): number {
  let foundOdd = 0;
  let infoNumbers: DataNumber[] = []; // Arreglo que contiene por cada elemento distinto de numeros, su respectivo valor y cantidad de apariciones

  for(let i=0; i < numeros.length; i++){
    if(!numeros.slice(0,i).includes(numeros[i])){
      // Primera aparicion del numero en el arreglo numeros
      let ap = 1;
      for(let j=i+1; j < numeros.length; j++){
        if(numeros[j] === numeros[i]){
          ap++;
        }
      }

      // Se agrega el numero con su respectiva cantidad de apariciones
      let actualNumber: DataNumber = { value: numeros[i], ocurrences: ap };

      infoNumbers.push(actualNumber);
    } 
  }

  // Finalmente, se devuelve el primer numero que tengas cantidad impar de apariciones
  for(const objNumber of infoNumbers){
    if(objNumber.ocurrences % 2 === 1){
      foundOdd = objNumber.value;
      break;
    }
  }
  
  return foundOdd;
}
