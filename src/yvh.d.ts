export enum PROTOCOL {
    CLOSET_ENEMIES= "closest-enemies",
    FURTHEST_ENEMIES= "furthest-enemies",
    ASSIST_ALLIES= "assist-allies",
    AVOID_CROSSFIRE= "avoid-crossfire",
    PRIORITIZE_MECH= "prioritize-mech",
    AVOID_MECH= "avoid-mech"
}

export enum ENEMIES_TYPE {
    SOLDIER= "solider",
    MECH= "mech"
}

export type Enemies = {
    type: ENEMIES_TYPE,
    number: number
}

export type Coordinate= {
    x: number,
    y: number
}

export type Scan = {
    coordinates:Coordinate,
    enemies: Enemies,
    allies?: number,
}

export type YVHRes = Coordinate

export type YVHRequest = {
    protocols: Array<PROTOCOL>,
    scan:Array<Scan>
}
