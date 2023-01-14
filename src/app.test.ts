import request from 'supertest';
import app from './app'; // importare il file app.ts in cui è definito il server

describe('Test endpoint POST', () => {
  it('Deve rispondere con un messaggio di successo per una richiesta JSON valida', async () => {
    const res = await request(app)
      .post('/endpoint')
      .send({ message: 'ciao' });

    expect(res.status).toBe(200);
    expect(res.text).toBe('JSON ricevuto');
  });
});
