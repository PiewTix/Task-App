



















const express = require('express');
const bodyParser = require('body-parser');
let path = require('path');
const app = express();
const server = require("http").createServer(app);








app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, '/views')));

/*


onderstaande geeft nog error, door typescript comp
niet erg, want dit is toch niet cruciaal voor de MVP

app.get('/', (_, resp) => {
    resp.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/todo-list', (_, resp) => {
    resp.sendFile(path.join(__dirname, '/views/todo-list.html'));
});



*/


let userrouter = require('./routes/TaskRouter');


app.use('/tasks', userrouter); //onze router

server.listen(3000, () => {console.log("listening on port 3000")})

console.log("Express server has started on port 3000. Open http://localhost:3000 to see results");