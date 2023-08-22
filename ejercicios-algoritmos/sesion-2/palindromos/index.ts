// export default function posiblePalindromo(num: number): boolean {
//   let palindromo: boolean = true;
//   let digits: number[] = [];

//   // Se colocan todos los digitos del num en un arreglo
//   while(num > 0){
//     let digit = num % 10;
//     digits.unshift(digit);
//     num = Math.floor(num / 10);
//   }

//   // Por ultimo, se chequea si el arreglo digits es un palindromo
//   for(let i=0; i < digits.length / 2; i++){
//     if(digits[i] !== digits[(digits.length - 1) - i]){
//       palindromo = false;
//       break;
//     }
//   }
  
//   return palindromo;
// }

// 2121 = 2 * 1000 + 1 * 100 + 2 * 10 + 1 * 1

/************ SOLUCION ALTERNATIVA ************/

export default function posiblePalindromo(num: number): boolean {
  let palindromo: boolean = true
  const digits: string[] = Array.from(num.toString());
  
  // Por ultimo, se chequea si el arreglo digits es un palindromo
  for(let i=0; i < digits.length / 2; i++){
    if(digits[i] !== digits[(digits.length - 1) - i]){
      palindromo = false;
      break;
    }
  }

  return palindromo;
}


