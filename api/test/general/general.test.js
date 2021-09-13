const supertest = require('supertest');

const {app, server} = require('../../src/app.js')

const api = supertest(app)

test('About API', async () => {
  const res = await api.get('/api/v1/about')
  expect(res.type).toEqual('text/html');
  expect(res.status).toEqual(200);
  expect(res.text).toEqual('Auth Sammy Guttman L.');
})

test('page not found 404', async () => {
  await api.get('/api/v1/404').expect(404)
})

test('return list id', async () => {
  const res = await api.get('/api/v1/equipments/id')
  expect(res.type).toEqual('application/json');
  expect(res.status).toEqual(200);
  expect(res.body).toHaveLength(100);
})

test('Not send data', async () => {
  const data = {}
  const res = await api.post('/api/v1/equipment').send(data)
  expect(res.type).toEqual('application/json');
  expect(res.status).toEqual(400);
  expect(res.body.result.errors.length).toEqual(12);
})

test('Invalid serial', async () => {
  const data = {
    serial: '123456',
  owner: 'Testing',
  email: 'testing@test.com',
  name: 'Lenovo',
  system: 'Windows',
  type: 'PC',
  }
  const res = await api.post('/api/v1/equipment').send(data)
  expect(res.type).toEqual('application/json');
  expect(res.status).toEqual(400);
  expect(res.body.message.message).toEqual('El numero serial no se encuentra registrado.');
})

test('Valid serial', async () => {
  const data = {
    serial: 'afqUqcEn5D',
  owner: 'Testing',
  email: 'testing@test.com',
  name: 'Lenovo',
  system: 'Windows',
  type: 'PC',
  }
  const res = await api.post('/api/v1/equipment').send(data)
  expect(res.type).toEqual('application/json');
  expect(res.status).toEqual(200);
  expect(res.body.message.message).toEqual('Los datos se han guardado correctamente.');
})

test('Reply serial', async () => {
  const data = {
    serial: 'afqUqcEn5D',
  owner: 'Testing',
  email: 'testing@test.com',
  name: 'Lenovo',
  system: 'Windows',
  type: 'PC',
  }
  const res = await api.post('/api/v1/equipment').send(data)
  expect(res.type).toEqual('application/json');
  expect(res.status).toEqual(400);
  expect(res.body.message.message).toEqual('EL equipo ya se encuentra asignado');
})

afterAll(() => {
  server.close()
})