const express = require('express');
const config = require('config');
const logger = require('./config/logger');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const mongoose = require('mongoose');
const cors = require('./config/cors');
mongoose.Promise = global.Promise;

// Authenctication.
const authenticateJwt = require('./auth/authenticate');
const adminOnly = require('./auth/adminOnly');
const authHandler = require('./auth/authHandler');

const swaggerDocument = YAML.load('./docs/swager.yaml');

const { host } = config.get('database');
mongoose
    // MongoDB lokálisan:
    // .connect(`mongodb://${host}`, {
    // MongoDB Atlas:
    .connect(host, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => logger.info('MongoDB connection has been established successfully.'))
    .catch(err => {
        logger.error(err);
        process.exit();
    });

app.use(cors());
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.static('public'));
app.use(bodyParser.json());

// Router.
// app.post('/login');
app.post('/login', authHandler.login);
app.post('/refresh', authHandler.refresh);
app.post('/logout', authHandler.logout);

app.use('/person', authenticateJwt, require('./controllers/person/person.routes'));
//app.use('/post', authenticateJwt, adminOnly, require('./controllers/post/post.routes'));
app.use('/users', require('./controllers/user/user.routes'));
app.use('/income', require('./controllers/income/income.routes'));
app.use('/costs', require('./controllers/cost/cost.routes'));
app.use('/costcategories', require('./controllers/costcategory/costcategory.routes'));
app.use('/costservice', require('./controllers/costservice/costservice.routes'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err, req, res, next) => {
    res.status(err.statusCode);
    res.json({
        hasError: true,
        message: err.message
    });
});

module.exports = app;
