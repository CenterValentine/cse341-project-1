const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users Api',
        description: 'Users api',
    },
    host: 'localhost:3000',
    schemes: ['http', 'https'],
};

const outputfile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputfile, endpointsFiles, doc);
