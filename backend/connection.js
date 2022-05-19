const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/model_hosting?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('databse successfully connected'))
    .catch(err => console.error(err));


module.exports = mongoose;