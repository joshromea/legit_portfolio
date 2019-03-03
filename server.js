const express = require('express')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

const hb = require('express-handlebars');
app.engine('handlebars', hb({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

const routes = require('./routes/htmlRoutes')

app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening on: http://localhost:${PORT}`);
});