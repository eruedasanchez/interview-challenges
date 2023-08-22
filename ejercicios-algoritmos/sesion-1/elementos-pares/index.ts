export default function filtrarPares(array: unknown[]): unknown[] {
  let pairs: unknown[] = [];
  
  for(let i=0; i < array.length; i++){
    if(!array.slice(0,i).includes(array[i])){
      // Primera aparicion del elemento
      let repetitions: unknown[] = array.filter(element => element === array[i]);
      if(repetitions.length % 2 === 0){
        // El elemento aparece una cantidad par de veces
        pairs.push(array[i]);
      }
    }
  }
  
  return pairs;
}

