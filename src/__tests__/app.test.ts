import { getHour, getTime, checkCadranValue } from "../modules/app";
import { expect, describe, test } from "vitest";
import { Hour } from "../modules/cadran";

describe("récupère la valeur d'un cadran", () => {
  test("retourne une erreur si la valeur n'est pas 1 ou 2", () => {
    expect(() => {
      checkCadranValue(3);
    }).toThrow("La valeur du cadran doit être 1 ou 2");
  });

  test("ne retourne pas d'erreur si la valeur est 1", () => {
    expect(() => {
      checkCadranValue(1);
    }).not.toThrow();
  });

  test("ne retourne pas d'erreur si la valeur est 2", () => {
    expect(() => {
      checkCadranValue(2);
    }).not.toThrow();
  });
});

describe("calcul de l'heure (nombre)", () => {
  test("retourne l'heure moon=1, sun=1, earth=1: 1+1-2=0", () => {
    expect(getHour(1, 1, 1)).toEqual(0);
  });

  test("retourne l'heure moon=2, sun=1, earth=1: (2+1)/2=1 (arrondi inférieur)", () => {
    expect(getHour(2, 1, 1)).toEqual(1);
  });

  test("retourne l'heure moon=1, sun=2, earth=1: (1+2+(1*2)+2)-2=6", () => {
    expect(getHour(1, 2, 1)).toEqual(6);
  });

  test("retourne l'heure moon=2, sun=2, earth=1: (2+2+(2*1)+2)/2=4 (arrondi inférieur)", () => {
    expect(getHour(2, 2, 1)).toEqual(4);
  });
  test("retourne l'heure moon=1, sun=1, earth=2: 1+1-2=0", () => {
    expect(getHour(1, 1, 2)).toEqual(0);
  });

  test("retourne l'heure moon=2, sun=1, earth=2: (2+1)/2=1 ", () => {
    expect(getHour(2, 1, 2)).toEqual(1);
  });

  describe("valeur de la terre = 2 : le résultat total est 6 (plus fort que tout)", () => {
    test("retourne l'heure moon=1, sun=2, earth=2", () => {
      expect(getHour(1, 2, 2)).toEqual(6);
    });

    test("retourne l'heure moon=2, sun=2, earth=2", () => {
      expect(getHour(2, 2, 2)).toEqual(6);
    });
  });
});

describe("calcul du temps en heure en Corodinsite Jupiterienne", () => {
  test("retourne une erreur si l'heure n'est pas un nombre", () => {
    expect(() => {
      getTime("not a number" as unknown as number);
    }).toThrow("L'heure doit être un nombre");
  });

  test("retourne l'heure mortin si heure <= 2", () => {
    expect(getTime(2)).toEqual(Hour.Mortin);
  });

  test("retourne l'heure aprenoon si heure > 2 et <= 4", () => {
    expect(getTime(3)).toEqual(Hour.Aprenoon);
  });

  test("retourne l'heure soirning si heure > 4 et <= 5", () => {
    expect(getTime(5)).toEqual(Hour.Soirning);
  });

  test("retourne l'heure nuight si heure > 5", () => {
    expect(getTime(6)).toEqual(Hour.Nuight);
  });
});
