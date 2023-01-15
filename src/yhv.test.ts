import { YHV } from './yhv';

const inputOutputPairs = [
  {
    input: {
      protocols: ['avoid-mech'],
      scan: [
        { coordinates: { x: 0, y: 40 }, enemies: { type: 'soldier', number: 10 } },
        { coordinates: { x: 0, y: 80 }, allies: 5, enemies: { type: 'mech', number: 1 } },
      ],
    },
    output: { x: 0, y: 40 },
  },
  {
    input: {
      protocols: ['prioritize-mech'],
      scan: [
        { coordinates: { x: 0, y: 40 }, enemies: { type: 'soldier', number: 10 } },
        { coordinates: { x: 0, y: 80 }, allies: 5, enemies: { type: 'mech', number: 1 } },
      ],
    },
    output: { x: 0, y: 80 },
  },
  {
    input: {
      protocols: ['closest-enemies'],
      scan: [
        { enemies: { number: 10, type: 'soldier' }, coordinates: { y: 35, x: 5 } },
        { enemies: { number: 20, type: 'soldier' }, coordinates: { y: 30, x: 10 } },
      ],
    },
    output: { x: 10, y: 30 },
  },
  {
    input: {
      protocols: ['furthest-enemies'],
      scan: [
        { enemies: { number: 10, type: 'soldier' }, coordinates: { y: 35, x: 5 } },
        { enemies: { number: 20, type: 'soldier' }, coordinates: { y: 30, x: 10 } },
      ],
    },
    output: { x: 5, y: 35 },
  },
  {
    input: {
      protocols: ['assist-allies'],
      scan: [
        { enemies: { number: 10, type: 'soldier' }, allies: 3, coordinates: { y: 35, x: 5 } },
        { enemies: { number: 20, type: 'soldier' }, coordinates: { y: 5, x: 35 } },
      ],
    },
    output: { x: 5, y: 35 },
  },
  {
    input: {
      protocols: ['avoid-crossfire'],
      scan: [
        { enemies: { number: 10, type: 'soldier' }, allies: 3, coordinates: { y: 35, x: 5 } },
        { enemies: { number: 20, type: 'soldier' }, coordinates: { y: 5, x: 35 } },
      ],
    },
    output: { x: 35, y: 5 },
  },
  {
    input: {
      protocols: ['furthest-enemies'],
      scan: [
        { enemies: { number: 10, type: 'soldier' }, coordinates: { y: 35, x: 5 } },
        { enemies: { number: 20, type: 'soldier' }, coordinates: { y: 30, x: 10 } },
      ],
    },
    output: { x: 5, y: 35 },
  },
  {
    input: {
      protocols: ['closest-enemies', 'avoid-mech'],
      scan: [
        { coordinates: { x: 0, y: 1 }, enemies: { type: 'mech', number: 1 } },
        { coordinates: { x: 0, y: 10 }, enemies: { type: 'soldier', number: 10 } },
        { coordinates: { x: 0, y: 99 }, enemies: { type: 'mech', number: 1 } },
      ],
    },
    output: { x: 0, y: 10 },
  },
];

describe('YHV', () => {
  inputOutputPairs.forEach((pair) => {
    it(`returns correct output for input: ${pair.input}`, () => {
      expect(YHV(pair.input as any)).toEqual(pair.output);
    });
  });
});
