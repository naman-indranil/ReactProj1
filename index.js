const express=require('express');
require('./models/user');
require('./services/passport');
const keys=require('./config/keys.js');
const cookieSession=require('cookie-session');
const passport=require('passport');
const uri = keys.mongoURI;
const mongoose = require('mongoose');
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app=express();

app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys:[keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.get('/',(req,res)=>{
    res.send({hi:"there"});
});


app.listen(process.env.PORT || 3000,()=>{
    console.log("server started");
});