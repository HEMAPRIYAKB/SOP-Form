const mongoose = require("mongoose")
mongoose.connect('',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err));