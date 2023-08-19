const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jorftama:180522@cluster0.yercuev.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
},
(err) => {
    if (!err) {
        console.log('Connection suceeded');
    } else {
        console.log('Error in connection' + err);
    }
});

require('./routes.model');
