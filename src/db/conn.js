const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://tusharmotka19cs:AyhWAyIMXbodYByW@buggifycluster.gnqrl4p.mongodb.net/userDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
   console.log(`connection established`); 
}).catch((err) => {
    console.log(err);
});