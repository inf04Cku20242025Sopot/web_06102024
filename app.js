const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const tools = require('./tools')
app.set('view engine', 'hbs');
//app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

req = express.request;
res = express.response;
app.get('/', (req, res) => {

    res.redirect('kontakt');
    console.log('Redirecting to kontakt page');
})

app.post('/kontakt', (req, res) => {
    const { pole1, pole2 } = req.body;
    const iloscLiter1 = tools.litery(pole1);
    const iloscLiter2 = tools.litery(pole2);
    const { imie, nazwisko, wiek } = req.body
    res.render('kontakt', {
        title: "Strona kontakt",
        content: `Witaj, ${imie} ${nazwisko}`,
        wiek: `Urodziłeś się ${wiek}`,
        litery: `Pole 1: ${pole1} ma ${iloscLiter1} liter, pole 2: ${pole2} ma ${iloscLiter2}`
    });

    // res.send(`Pole 1: ${pole1} ma ${iloscLiter1} liter, Pole 2: ${pole2} ma ${iloscLiter2}`)

})

app.get('/kontakt', (req, res) => {
    res.render('kontakt', {
        title: "Strona kontakt",
    })
})

app.listen(port);