
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
     
var mongouRI = 'mongodb+srv://yusef:1234@nodeapi-1-qpvve.mongodb.net/Todo?retryWrites=true&w=majority'
var localDB = 'mongodb://localhost:27017/TodoApp';
mongoose.connect(
     'mongodb+srv://yusef:1234@nodeapi-1-qpvve.mongodb.net/Todo?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true  }  
    );

    module.exports = mongoose;