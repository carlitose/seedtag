import { Enemy } from './Enemy';
import { Point } from './Point';
import type { Scan } from '../structure/yvh';

export class Radar {
  private _point: Point;

  private _enemy: Enemy;

  private _allies: boolean;

  constructor({ coordinates, enemies, allies }: Scan) {
    this._enemy = new Enemy(enemies);
    this._point = new Point(coordinates);
    this._allies = !!allies;
  }

  get coordinate() {
    return { x: this._point.x, y: this._point.y };
  }

  get distance() {
    return this._point.isTooDistance() ? -1 : this._point.distance;
  }

  isAMech() {
    return this._enemy.isAMech();
  }

  thereAreAllies() {
    return this._allies;
  }
}
