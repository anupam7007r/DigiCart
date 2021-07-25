const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.con_url)
    .then((data) => { console.log('Database Connected') })
    .catch((er) => { console.error(er) });

module.exports = mongoose