// type Values = {
//   value: unknown,
//   cant: number
// }

function cantidadApariciones(array: unknown[], item: unknown): number {
  let apariciones = 0;
  for(let it of array){
    if(it == item){
      apariciones++;
    }
  }
  
  return apariciones;
}

export default function filtrarPares(array: unknown[]): unknown[] {
  let result: unknown[] = [];
  
  for(let i=0; i < array.length; i++){
    if(!((array.slice(0,i)).includes(array[i])) && cantidadApariciones(array, array[i]) % 2 == 0){
      // primera aparicion del elemento y cantidad par de apariciones 
      result.push(array[i])
    }
  }
  
  return result;
}

