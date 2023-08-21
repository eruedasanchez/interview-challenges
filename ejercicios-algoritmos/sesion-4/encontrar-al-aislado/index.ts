export default function buscarAislado(numeros: number[]): number {
    let isolated: number = 0; // inicializo la variable que voy a retornar en 0

    let pairs: number[] = numeros.filter(num => num % 2 === 0); 
    let odds: number[] = numeros.filter(num => num % 2 === 1);

    if(pairs.length === 1){
      isolated = pairs[0];
    }

    if(odds.length === 1){
      isolated = odds[0];
    }

    return isolated;
}