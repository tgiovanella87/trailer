const express = require('express');
const cors = require('cors');
const application = express();

application.use(cors())
application.use(express.json());

require('../../routes/openRoutes')(application);

module.exports =  application;


