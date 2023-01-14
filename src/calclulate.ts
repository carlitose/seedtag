import type {YVHRequest, Coordinate} from './structure/yvh'
import {Radar} from './class/Radar'
import {PROTOCOL} from './structure/constants'

const closestEnemies = (scanArray :Array<Radar>):Array<Radar> => scanArray.slice().sort((a, b) => a.distance - b.distance)
const furtherEnemies = (scanArray :Array<Radar>):Array<Radar> => scanArray.slice().sort((a, b) => b.distance - a.distance)
const assistAllies = (scanArray :Array<Radar>):Array<Radar> => scanArray.filter((element) => element.thereAreAllies())
const avoidCrossFire = (scanArray :Array<Radar>):Array<Radar> => scanArray.filter((element) => !element.thereAreAllies())
const prioritizeMech = (scanArray :Array<Radar>):Array<Radar> => scanArray.slice().sort((a, b) => {
    if(a.isAMech() === b.isAMech()){
        return 0
    }
    return a.isAMech() ? -1 : 1
})
const avoidMech = (scanArray :Array<Radar>):Array<Radar>=>  scanArray.filter((element) => !element.isAMech())
const removeTooDistanceElements = (scanArray :Array<Radar>):Array<Radar>=> scanArray.filter((element) => element.distance > 0)

export const calculate = ({protocols, scan}:YVHRequest): Coordinate =>{
    let scanArray :Array<Radar> = removeTooDistanceElements(scan.map((element) => new Radar(element)))

    if(protocols.includes(PROTOCOL.CLOSET_ENEMIES)){
        scanArray = closestEnemies(scanArray)
    }
    if(protocols.includes(PROTOCOL.FURTHEST_ENEMIES)){
        scanArray = furtherEnemies(scanArray)
    }
    if(protocols.includes(PROTOCOL.ASSIST_ALLIES)){
        scanArray = assistAllies(scanArray)
    }
    if(protocols.includes(PROTOCOL.AVOID_CROSSFIRE)){
        scanArray = avoidCrossFire(scanArray)
    }
    if(protocols.includes(PROTOCOL.PRIORITIZE_MECH)){
        scanArray = prioritizeMech(scanArray)
    }
    if(protocols.includes(PROTOCOL.AVOID_MECH)){
        scanArray = avoidMech(scanArray)
    }
    return scanArray[0].coordinate
}