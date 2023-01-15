import { ENEMIES_TYPE } from '../structure/constants';
import { Radar } from '../class/Radar';
import {
  removeTooDistanceElements,
  closestEnemies,
  furtherEnemies,
  assistAllies,
  avoidCrossFire,
  prioritizeMech,
  avoidMech,
} from './index';

describe('YVH functions', () => {
  const elements = [
    { coordinates: { x: 0, y: 1 }, enemies: { type: ENEMIES_TYPE.MECH, number: 1 } },
    { coordinates: { x: 0, y: 10 }, enemies: { type: ENEMIES_TYPE.SOLDIER, number: 10 } },
    { coordinates: { x: 0, y: 99 }, enemies: { type: ENEMIES_TYPE.MECH, number: 1 } },
    {
      coordinates: { x: 2, y: 101 },
      enemies: { type: ENEMIES_TYPE.SOLDIER, number: 1 },
      allies: 3,
    },
  ];
  const scans = elements.map((element) => new Radar(element));

  it('removeTooDistanceElements', () => {
    const newScans = removeTooDistanceElements(scans);
    expect(newScans.length).toEqual(3);
  });
  it('closestEnemies', () => {
    const newScans = closestEnemies(removeTooDistanceElements(scans));
    expect(newScans[0].coordinate).toMatchObject({ x: 0, y: 1 });
  });
  it('furtherEnemies', () => {
    const newScans = furtherEnemies(removeTooDistanceElements(scans));
    expect(newScans[0].coordinate).toMatchObject({ x: 0, y: 99 });
  });
  it('assistAllies', () => {
    const newScans = assistAllies(scans);
    expect(newScans[0].coordinate).toMatchObject({ x: 2, y: 101 });
  });
  it('avoidCrossFire', () => {
    const newScans = avoidCrossFire(scans);
    expect(newScans[0].coordinate).toMatchObject({ x: 0, y: 1 });
    expect(newScans.length).toEqual(3);
  });
  it('prioritizeMech', () => {
    const newScans = prioritizeMech(scans);
    expect(newScans[0].coordinate).toMatchObject({ x: 0, y: 1 });
    expect(newScans[1].coordinate).toMatchObject({ x: 0, y: 99 });
  });
  it('avoidMech', () => {
    const newScans = avoidMech(scans);
    expect(newScans[0].coordinate).toMatchObject({ x: 0, y: 10 });
    expect(newScans.length).toEqual(2);
  });
});
