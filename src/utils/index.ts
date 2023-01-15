import { Radar } from '../class/Radar';

export const closestEnemies = (scanArray: Array<Radar>): Array<Radar> =>
  scanArray.slice().sort((a, b) => a.distance - b.distance);

export const furtherEnemies = (scanArray: Array<Radar>): Array<Radar> =>
  scanArray.slice().sort((a, b) => b.distance - a.distance);

export const assistAllies = (scanArray: Array<Radar>): Array<Radar> =>
  scanArray.filter((element) => element.thereAreAllies());

export const avoidCrossFire = (scanArray: Array<Radar>): Array<Radar> =>
  scanArray.filter((element) => !element.thereAreAllies());

export const prioritizeMech = (scanArray: Array<Radar>): Array<Radar> =>
  scanArray.slice().sort((a, b) => {
    if (a.isAMech() === b.isAMech()) {
      return 0;
    }
    return a.isAMech() ? -1 : 1;
  });

export const avoidMech = (scanArray: Array<Radar>): Array<Radar> =>
  scanArray.filter((element) => !element.isAMech());

export const removeTooDistanceElements = (scanArray: Array<Radar>): Array<Radar> =>
  scanArray.filter((element) => element.distance > 0);
