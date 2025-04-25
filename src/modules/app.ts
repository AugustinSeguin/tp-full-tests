import { Hour, Cadran } from "./cadran";

export function getHour(moon: number, sun: number, earth: number): number {
  checkCadranValue(moon);
  checkCadranValue(sun);
  checkCadranValue(earth);

  if (earth === 2 && sun === 2) {
    return 6;
  }
  let total = 0;

  if (sun === 1) {
    earth = 0;
  } else if (sun === 2) {
    earth = earth * 2;
  }

  if (earth === 1) {
    total = 2;
  }

  total += moon + sun + earth;
  if (moon === 2) {
    total = Math.floor(total / 2);
  } else if (moon === 1) {
    total = total - 2;
  }

  return total;
}

export function getTime(hour: number): Hour {
  if (typeof hour !== "number") {
    throw new Error("L'heure doit être un nombre");
  }
  if (hour <= 2) {
    return Hour.Mortin;
  }
  if (hour <= 4) {
    return Hour.Aprenoon;
  }
  if (hour <= 5) {
    return Hour.Soirning;
  }
  return Hour.Nuight;
}

export function checkCadranValue(value: number): void {
  if (value !== 1 && value !== 2) {
    throw new Error("La valeur du cadran doit être 1 ou 2");
  }
}
