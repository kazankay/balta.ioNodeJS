const mongoose = require('mongoose');
const config = require('./config');
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(config.connectionString, {dbName: 'test'})