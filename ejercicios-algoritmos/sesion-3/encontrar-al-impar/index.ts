export default function encontrarImpar(numeros: number[]): number {
  let filterByNumber: number[] = [];
  for(const num of numeros){
    filterByNumber = numeros.filter(number => number === num);
    if(filterByNumber.length % 2 === 1) break;
  }

  return filterByNumber[0];

}