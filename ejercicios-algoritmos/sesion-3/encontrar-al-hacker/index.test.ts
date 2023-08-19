import type { Estudiante } from "./types";

import { expect, describe, it } from "vitest";

import encontrarHackers from ".";

describe("encontrarHackers", () => {
  const actual: Estudiante[] = [
    ["estudiante1", 150, ["B", "A", "A", "C", "A", "A"]], // 150
    ["estudiante2", 120, ["B", "A", "A", "A"]],           // 110
    ["estudiante3", 160, ["B", "A", "A", "A", "A"]],          // 140 + 20 = 160
    ["estudiante4", 140, ["B", "A", "A", "C", "A"]],          // 120  
  ];
  const expected = ["estudiante2", "estudiante4"];

  it("debería encontrar los hackers correctamente correctamente", () =>
    expect(encontrarHackers(actual)).toMatchObject(expected));
});
