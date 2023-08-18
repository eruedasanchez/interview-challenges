type Input = {
  nombres: string[];
  edades: number[];
};

type Output = {
  id: number;
  nombre: string;
  edad: number;
};

export default function transformador(input: Input): Output[] {
  let resultado: Output[] = [];
  
  for(let i = 0; i < input.nombres.length; i++){
    const personaActual: Output = {
      id: i+1,
      nombre: input.nombres[i],
      edad: input.edades[i]
    };
    
    resultado.push(personaActual);
  }
  
  return resultado;
}
