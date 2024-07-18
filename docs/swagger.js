const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Payment Service API',
            version: '1.0.0',
            description: 'API for managing payments',
        },
        servers: [
            {
                url: 'http://localhost:5000',
                description: 'Local server'
            },
        ],
    },
    apis: ['./routes/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
