type Registry = {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
};

export default function continentesRepresentados(array: Registry[]): boolean {
  let result: boolean = false;
  let devsByContinent: number[] = [0, 0, 0, 0, 0];

  for(let dev of array){
    switch(dev.continent){
      case "Africa":
        devsByContinent[0]++;
        break;
        
      case "Americas":
        devsByContinent[1]++;
        break;

      case "Asia":
        devsByContinent[2]++;
        break;

      case "Europe":
        devsByContinent[3]++;
        break;

      default:
        devsByContinent[4]++;
        break;
    }
  }

  if(!devsByContinent.includes(0)){
    result = true;
  }
  
  return result;
}
