somebirdsColorAndSizeSelection Shoe color & size selection service

Read / GET Endpoints: Create / POST Endpoint: '/products/:shoeId/gallery' Request Body: var image = { imageUrl: 'image.jpg' }

GET images of shoe:/products/:shoeId/gallery Response Example for /products/1/gallery: ["https://sb-images-service.s3-us-east-2.amazonaws.com/TD1.jpeg","https://sb-images-service.s3-us-east-2.amazonaws.com/TD3.jpeg","https://sb-images-service.s3.us-east-2.amazonaws.com/TD2.jpeg","https://sb-images-service.s3.us-east-2.amazonaws.com/TD2flip.jpeg","https://sb-images-service.s3.us-east-2.amazonaws.com/TD5.jpeg","https://sb-images-service.s3.us-east-2.amazonaws.com/TD5flip.jpeg","https://sb-images-service.s3.us-east-2.amazonaws.com/TD6.jpeg","https://sb-images-service.s3.us-east-2.amazonaws.com/TD8.jpg","server-test.jpg"]

Update / PATCH Endpoint: /products/:shoeId/gallery/:imageId Request Body: var image = { imageUrl: 'image.jpg' }

Delete / DELETE Endpoint: '/products/:shoeId/gallery/:imageId'
