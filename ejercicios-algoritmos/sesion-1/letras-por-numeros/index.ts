export default function letrasPorNumeros(string: string): string {
  let numbers = "";

  // Se limpia el string que se pasa por parametro de caracteres especiales
  const cleanString = string.replace(/[^\w]/gi, ""); 
  
  // Se itera cleanString y se asigna a cada caracter su respectivo index en el alfabeto
  for(let idx=0; idx < cleanString.length; idx++){
    const upperCaseChar = cleanString[idx].toUpperCase(); // convierto a mayuscula solo para estar en el rango [65,89]
    const index = (upperCaseChar.charCodeAt(0) - 'A'.charCodeAt(0)) + 1;
    if(idx === cleanString.length -1){
      numbers += index;
    } else {
      numbers += index + " ";
    }
  } 
  
  return numbers;
}







