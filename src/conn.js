const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://admin:masterkey@cluster0-birxs.gcp.mongodb.net/test?retryWrites=true&w=majority', {dbName: 'test'})