import express, { Request, Response } from "express";
const app = express();

const midtransClient = require("midtrans-client");

const SERVER_KEY = "SB-Mid-server-KCHrmlF6leN5gp-SF-nHQ9HR";
const CLIENT_KEY = "SB-Mid-client-YbgnJ7kX2pO-2j7l";

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Home page
app.get('/', function(req: Request, res: Response) {
    res.render('index');
});

// login page
app.get('/login', function(req: Request, res: Response) {
    res.render('login');
})


app.listen(3000, () => {
    console.log('Website On');
});