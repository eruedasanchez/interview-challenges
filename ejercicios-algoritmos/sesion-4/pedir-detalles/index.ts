import type { Developer } from "./types";

export default function pedirDetalles(developers: Developer[]): Developer[] {
  let details: Developer[] = [];

  for(const dev of developers){
    if(Object.values(dev).includes(null)){
      const idxNull = Object.values(dev).indexOf(null); 
      const devModified: Developer = {...dev, question: `Hi, could you please provide your ${Object.keys(dev)[idxNull]}.`};
      details.push(devModified);
    }
  }
  
  return details;
}
