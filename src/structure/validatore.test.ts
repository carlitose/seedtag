
import { ValidationError } from 'ajv'
import { yvhRequestSchema } from './schema'

describe('validator test', () => {
    it('should be valid', () => {
        const json = { "protocols": ["avoid-mech"], "scan": [{ "coordinates": { "x": 0, "y": 40 }, "enemies": { "type": "soldier", "number": 10 } }] }
        const {error} = yvhRequestSchema.validate(json)
        expect(error).toBeUndefined()
    })
    it('shoudl not be valid', ()=>{
        const json = { "protocols": ["avoid-mech"], "scan": [{ "coordinates": { "x": 0, "y": 40 }, "enemies": { "type": "millennium falcon", "number": 10 } }] }
        const {error}= yvhRequestSchema.validate(json)
        expect(error).toEqual( expect.objectContaining({message: '"scan[0].enemies.type" must be one of [soldier, mech]'}))
    })
})