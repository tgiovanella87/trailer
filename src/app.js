const application = require('./services/server/server');
require('dotenv-safe').config();

const __port = process.env.PORT || 3333;

application.listen(__port, () => {
    console.info(`Application listen on ${__port}`);
})