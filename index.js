const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');
const connectDB = require('./config/db');
const paymentRoutes = require('./routes/paymentRoutes');
require('dotenv').config();

const app = express();
connectDB();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.redirect('/docs');
});

app.use('/api', paymentRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
