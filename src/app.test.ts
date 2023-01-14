import request from 'supertest';
import app from './app'; // importare il file app.ts in cui è definito il server

describe('Test radar POST', () => {
  it('should response with an error if the body is not a YVH request', async () => {
    const res = await request(app)
      .post('/radar')
      .send({ message: 'EMPIRE IS REBORN!' });

    expect(res.status).toBe(400);
    expect(res.text).toBe('JSON ricevuto');
  });
});
