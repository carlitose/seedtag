import type { YVHRequest, Coordinate } from './structure/yvh';
import { Radar } from './class/Radar';
import { PROTOCOL } from './structure/constants';
import {
  removeTooDistanceElements,
  closestEnemies,
  furtherEnemies,
  assistAllies,
  avoidCrossFire,
  prioritizeMech,
  avoidMech,
} from './utils';

export const YHV = ({ protocols, scan }: YVHRequest): Coordinate => {
  let scanArray: Array<Radar> = removeTooDistanceElements(
    scan.map((element) => new Radar(element)),
  );

  if (protocols.includes(PROTOCOL.CLOSET_ENEMIES)) {
    scanArray = closestEnemies(scanArray);
  }
  if (protocols.includes(PROTOCOL.FURTHEST_ENEMIES)) {
    scanArray = furtherEnemies(scanArray);
  }
  if (protocols.includes(PROTOCOL.ASSIST_ALLIES)) {
    scanArray = assistAllies(scanArray);
  }
  if (protocols.includes(PROTOCOL.AVOID_CROSSFIRE)) {
    scanArray = avoidCrossFire(scanArray);
  }
  if (protocols.includes(PROTOCOL.PRIORITIZE_MECH)) {
    scanArray = prioritizeMech(scanArray);
  }
  if (protocols.includes(PROTOCOL.AVOID_MECH)) {
    scanArray = avoidMech(scanArray);
  }
  return scanArray[0]?.coordinate || { x: 0, y: 0 };
};
