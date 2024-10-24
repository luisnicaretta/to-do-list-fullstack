const mongoose = require('mongoose');

const connectToDb = () => {
    mongoose.connect(
        "mongodb+srv://root:admin@to-do-list.8knms.mongodb.net/?retryWrites=true&w=majority&appName=to-do-list",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(() => console.log("MongoDB Atlas CONECTADO!")
    ).catch((err) => console.log(err));
};

module.exports = connectToDb;