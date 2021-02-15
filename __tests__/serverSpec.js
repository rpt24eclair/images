const app = require('../server/server.js')
const request = require('supertest')

describe("Server test", () => {
	test('should post a record', async ()=> {
		var res = await request(app)
		.post('/products/10000001/gallery')
		.send({
			imageUrl: 'server-test.jpg'
		})
	})

	test('should get a record', async ()=>{
		var res = await request(app).get('/products/10000001/gallery')
		.then(res=>expect(res.body).toContain('server-test.jpg'))
	})

	test('should update a record', async ()=>{
		var image =  {
			    imageUrl: 'server-test-2.jpg'
			  }
		var res = await request(app).put('/products/10000001/gallery/1').send(image)
	})

	test('should check the updated record', async ()=>{
		var res = await request(app).get('/products/10000001/gallery').then(res=>expect(res.body).toContain('server-test-2.jpg'))
	})

	test('should delete a record', async ()=>{
		var res = await request(app).get('/products/10000001/gallery/1')
		expect(res.body).not.toContain('server-test-2.jpg')
	})

})
