console.log("just adding the dev branch to github repo")
//const http = require('http');
const express = require('express')
const dotenv = require('dotenv')    // why is this one used?

dotenv.config({ path: './config/config.env'});

const express_app = express();

const PORT = process.env.PORT || 5550;
express_app.listen(
      PORT,
      console.log(`Server running in ${process.env.NODE_ENBV} mode on port ${PORT}`)
);
console.log('bye tatae');
