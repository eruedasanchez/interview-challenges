import type { Developer } from "./types";

export default function encontrarLaMedia(developers: Developer[]): number {
  const ages: number[] = [];

  for(const dev of developers){
    ages.push(dev.age);
  }
  
  const media = Math.round(ages.reduce((acc, age) => acc + age, 0) / ages.length);
  
  return media;
}


