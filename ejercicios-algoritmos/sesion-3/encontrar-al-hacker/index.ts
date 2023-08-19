import type { Estudiante } from "./types";

type DataStudent = {
  name: string;
  puntaje: number;
};

const MAX_PUNTAJE = 200;

export default function encontrarHackers(students: Estudiante[]): string[] {
  let hackers: string[] = [];
  
  for(let student of students){
    let score = 0;
    let cantA = 0;
    let cantB = 0;
    for(let note of student[2]){
      switch (note) {
        case "A":
          score += 30;
          cantA++;
          break;
        
        case "B":
          score += 20;
          cantB++;
          break;

        case "C":
          score += 10;
          break;

        case "D":
          score += 5;
          break;
      
        default:
          break;
      }
    }

    if((student[2].length >= 5) && (cantA + cantB === student[2].length)){
      score += 20;
    }

    if(score > MAX_PUNTAJE){
      score = 200;
    }

    let actualStudent: DataStudent = { name: student[0], puntaje: score};

    if(actualStudent.puntaje < student[1]){
      hackers.push(actualStudent.name);
    }
  }
  
  return hackers;
}

