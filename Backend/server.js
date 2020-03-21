const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mongoUrl = 'mongodb+srv://sufu:123QWe!%40@cluster0-5gf8g.mongodb.net/mydb?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true'
const authManager = require('./authManager/auth');
const dashManager = require('./DashManager/dash');
const verifyAuth = require('./middleWare/VerifyAuth');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app = express();


mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection


app.use(bodyParser.json());
app.use(router);
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 1000 },
    store: new MongoStore({ mongooseConnection: db })
}))

router.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 10000 },
    store: new MongoStore({ mongooseConnection: db })
}))
// three basic authentication cases and their corresponding routes

router.post("/login", authManager.login);
router.post("/signUp", authManager.signUp);
//router.post("/logOut",authManager.logOut);

// route for dashboard 
router.post("/dashboard",verifyAuth, dashManager.dashboard);

mongoose.connect(mongoUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('connected to mongodb');

});
mongoose.connection.on('error', (err) => {
    console.log('err1: ', err);

})

app.listen(4000, () => {
    console.log(' the server has started on port number 4000');

})