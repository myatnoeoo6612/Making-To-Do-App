const express = require('express');
const todoController = require('./controllers/todoController');
const app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log("server is running at port 3000");

