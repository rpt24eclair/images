const app = require('../server/server.js')
const request = require('supertest')

describe("Server test", () => {
	test('should post a record', async ()=> {
		var res = await request(app)
		.post('/products/1/gallery')
		.send({
			imageUrl: 'server-test.jpg'
		})


		})

	test('should get a record', async ()=>{

		var res = await request(app).get('/products/1/gallery')
		expect(res.body).toContain('server-test-2.jpg')
	})

	test('should update a record', async ()=>{
		var image =  {
			    imageUrl: 'Jake-1000.jpg'
			  }
		var res = await request(app).put('/products/1/gallery/94').send(image)
	})

	test('should check the updated record', async ()=>{

		var res = await request(app).get('/products/1/gallery')
		expect(res.body).toContain('Jake-1000.jpg')
	})

	test('should delete a record', async ()=>{
		var res = await request(app).get('/products/1/gallery/94')
		expect(res.body).not.toContain('Jake-1000.jpg')
	})

})