const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/CrudDB', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(console.log('Connected to MongoDB')).catch(error=> handleError(error));

module.exports = mongoose;