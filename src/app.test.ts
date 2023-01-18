// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';
import app from './app';

describe('Test radar POST', () => {
  it('should be response with a 200', async () => {
    const res = await request(app)
      .post('/radar')
      .send({
        protocols: ['avoid-mech'],
        scan: [{ coordinates: { x: 0, y: 40 }, enemies: { type: 'soldier', number: 10 } }],
      });

    expect(res.status).toBe(200);
  });
  it('should be response with a 400', async () => {
    const res = await request(app)
      .post('/radar')
      .send({
        protocols: ['avoid-mech'],
      });

    expect(res.status).toBe(400);
  });
  it('should response with status 400 if the body is not a YVH request', async () => {
    const res = await request(app).post('/radar').send({ message: 'EMPIRE IS REBORN!' });

    expect(res.status).toBe(400);
  });
});
