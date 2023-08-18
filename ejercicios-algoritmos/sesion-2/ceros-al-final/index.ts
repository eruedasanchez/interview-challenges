export default function moverCeros(array: unknown[]): unknown[] {
  for(let i=0; i < array.length; i++){
    if(array[i] === 0){
      for(let j=i+1; j < array.length; j++){
        // swap
        let tmp: unknown = array[j-1];
        array.splice(j-1,1,array[j]);
        array.splice(j,1,tmp);
      }
    }
  } 
  
  return array;
}
