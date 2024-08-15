require('dotenv').config();

const cors = require('cors');
const express = require('express');

require('./src/connect/db');

const app = express();
const port = 3000;

const router = require('./src/routes/index');

app.use(cors());
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  
app.use(router);
app.use('/static', express.static('public'));

app.listen(port, () => {
    console.log(`Listening on port ${port} now!`);
});
