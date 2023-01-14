import { ENEMIES_TYPE } from "../structure/constants";
import type { Enemies } from "../structure/yvh";
export class Enemy{
    private _type: ENEMIES_TYPE;
    constructor({type}:Enemies){
        this._type = type
    }
    isAMech(){
        return this._type === ENEMIES_TYPE.MECH
    }
}