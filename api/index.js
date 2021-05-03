const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
app.options('*',cors());


// * define port
const port = 8085;

// * define root controller
app.get('/',(req, res, next) => {
    res.send('welcome to my api!');
});

//* define GET controller for triangulo
app.get('/operation',(req, res) => {
    var result = req.query.result;
    var objResult = {
        result: result
    };
    res.send(objResult);
});

app.listen(port, () => console.log('listening on port '+port));