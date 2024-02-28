import request from 'supertest';
import app, { server } from '../../src/index';

describe('Test "/" return', () => {
  it('can success', async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).toEqual(200);
  });
});

afterAll((done) => {
  server.close(done);
});
