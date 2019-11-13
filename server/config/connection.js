const mongoose = require("mongoose");
let mode = "";
if (process.env.NODE_ENV === "testing") {
    mode = "-test";
}
mongoose.connect(process.env.MONGO_DB_LOCAL + mode, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(err){
    if (err)    console.log(`Failed to connect database.`);
    else        console.log(`Success connect to database.`);
});

module.exports = mongoose;