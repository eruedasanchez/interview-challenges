import type { Developer } from "./types";

export default function encontrarAlMasViejo(developers: Developer[]): Developer[] {
  let olders: Developer[] = []; 
  const ageDesc: Developer[] = developers.sort((dev1, dev2) => dev2.age - dev1.age); 

  olders.push(ageDesc[0]);
  let i = 1;

  while(i < ageDesc.length && ageDesc[i].age === ageDesc[0].age){
    olders.push(ageDesc[i]);
    i++;
  }
  
  return olders;
}
