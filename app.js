const express = require('express');
const app = express();
const port = 3000;
const hbs = require('hbs');

const profesionalesRouter = require('./src/routes/profesionales.js');

hbs.registerPartials(__dirname + '/src/views/partials', (err) => {
    if (err) console.log(err);
});
app.set('view engine', 'hbs');
app.set('views', __dirname + "/src/views");

app.use(express.static(__dirname + '/src/public'));

app.get("/", (req, res) => {
    res.render('index', {
        descripcion: "Bienvenido a la aplicación de visualización de profesionales!"
    });
});

app.use("/profesionales", profesionalesRouter);

app.use((req, res) => {
    res.status(404).render('404', {
        titulo: "404 Not Found",
        descripcion: "No hemos encontrado la página que solicitaste!"
    })
});

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}/`);
})