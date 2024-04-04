
const express = require("express");
const app = express();
const port = 3000;


const filmRoute = require("./routes/film.routes");

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true })); // Envío de formularios

app.set('view engine', 'pug');
app.set('views', './views');


app.get('/home', function (req, res) {
    res.render('home');
});

app.use('/film', filmRoute);


app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`);
});