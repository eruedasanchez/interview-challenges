export default function girar(texto: string): string {
  let giraSarbalap = "";
  
  const words = texto.split(/\s/); // "Hola como estás" -> ["Hola", "como", "estás"]

  for(let w=0; w < words.length; w++){
    if(words[w].length >= 5){
      // Se aplica el reverso a la palabra
      let word: string = Array.from(words[w]).reverse().toString().replace(/,/gi, '');
      
      w === words.length - 1 ? giraSarbalap += word : giraSarbalap += word + " ";
    } else {
      w === words.length - 1 ? giraSarbalap += words[w] : giraSarbalap += words[w] + " ";
    }
  }
  
  return giraSarbalap;
}

