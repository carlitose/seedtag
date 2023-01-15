import { ENEMIES_TYPE, PROTOCOL } from './constants';

export type Enemies = {
  type: ENEMIES_TYPE;
  number: number;
};

export type Coordinate = {
  x: number;
  y: number;
};

export type Scan = {
  coordinates: Coordinate;
  enemies: Enemies;
  allies?: number;
};

export type YVHRes = Coordinate;

export type YVHRequest = {
  protocols: Array<PROTOCOL>;
  scan: Array<Scan>;
};
