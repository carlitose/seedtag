import { ENEMIES_TYPE } from '../structure/constants';
import { Radar } from './Radar';

describe('Radar test', () => {
  const element = {
    enemies: { number: 10, type: ENEMIES_TYPE.SOLDIER },
    coordinates: { y: 35, x: 5 },
  };
  const radar = new Radar(element);
  it('coordinate', () => {
    expect(radar.coordinate).toMatchObject(element.coordinates);
  });
  it('distance', () => {
    expect(radar.distance).toEqual(35 ** 2 + 5 ** 2);
  });
  it('isAMech', () => {
    expect(radar.isAMech()).toBeFalsy();
  });
  it('thereAreAllies', () => {
    expect(radar.thereAreAllies()).toBeFalsy();
  });
});
