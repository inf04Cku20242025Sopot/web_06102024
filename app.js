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
    console.log('Redirecting to Kontakt page');
})

app.post('/kontakt', (req, res) => {
    // const { pole1, pole2, imie, nazwisko } = req.body;
    const pole1 = req.bodyParser;
    const pole2 = req.bodyParser;
    const imie = req.bodyParser;
    const nazwisko = req.bodyParser;
    const wiek = req.bodyParser;
    res.send(pole1, pole2, imie, nazwisko, wiek);
    app.get('/form', (req, res) => {
        res.render('/form', {
            content: `Witaj, ${imie} ${nazwisko}`,
            wiek: `Urodziłeś się ${wiek}`,
        })
        // litery: `Pole 1: ${pole1} ma ${iloscLiter1} liter, pole 2: ${pole2} ma ${iloscLiter2}`

    })


})

app.get('/kontakt', (req, res) => {
    res.render('kontakt', {
        title: "Strona kontakt",
    })

    // app.get('/form', (req, res) => {
    //     req.render('/form', {
    //         content: `Witaj, ${imie} ${nazwisko}`,
    //         wiek: `Urodziłeś się ${wiek}`,
    //         litery: `Pole 1: ${pole1} ma ${iloscLiter1} liter, pole 2: ${pole2} ma ${iloscLiter2}`

    //     })

    // })
})


app.listen(port);