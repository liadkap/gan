const mongoose = require('mongoose');

export default () => {
    mongoose.connect('mongodb://localhost:27017/gan', { useNewUrlParser: true, useUnifiedTopology: true });

    var db = mongoose.connection;

    db.once('open', function() {
        console.log('connected to mongodb at gan');
    });
}