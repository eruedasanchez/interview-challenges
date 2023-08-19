export default function girar(texto: string): string {
  let giraSarbalap = "";
  
  const words = texto.split(/\s/); // "Hola como estás" -> ["Hola", "como", "estás"]

  for(let w=0; w < words.length; w++){
    if(words[w].length >= 5){
      // Se aplica el reverso a la palabra
      let characters: string[] = [];
      for(let i=0; i < words[w].length; i++){
        characters.push(words[w].charAt(i));
      }

      let finalWord = characters.reverse().toString().replace(/,/gi, '');

      if(w === words.length - 1){
        giraSarbalap += finalWord;
      } else {
        giraSarbalap += finalWord + " ";
      } 
    } else {
      if(w === words.length - 1){
        giraSarbalap += words[w];
      } else {
        giraSarbalap += words[w] + " ";
      }
    }
  }
  
  return giraSarbalap;
}


// estás

// let tmp: unknown = array[j-1];
//         array.splice(j-1,1,array[j]);
//         array.splice(j,1,tmp);