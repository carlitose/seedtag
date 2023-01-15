import type { Coordinate } from '../structure/yvh';
import { MAX_DISTANCE } from '../structure/constants';

export class Point {
  private _x: number;

  private _y: number;

  private _distance: number;

  private _tooDistance: boolean;

  constructor({ x, y }: Coordinate) {
    this._x = x;
    this._y = y;
    this._distance = x ** 2 + y ** 2;
    this._tooDistance = this._distance > MAX_DISTANCE;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get distance() {
    return this._distance;
  }

  isTooDistance() {
    return this._tooDistance;
  }
}
