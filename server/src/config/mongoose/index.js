const mongoose = require('mongoose');

export default () => {
    mongoose.connect(process.env.MONGO_ADDRESS, { useNewUrlParser: true, useUnifiedTopology: true });

    var db = mongoose.connection;

    db.once('connected', () => {
        console.log('connected to mongodb at gan');
    });
}