const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'hbs');

// Middleware do parsowania danych z formularza
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.redirect('kontakt');
    console.log('Redirecting to Kontakt page');
});

// Strona z formularzem kontaktowym
app.get('/kontakt', (req, res) => {
    res.render('kontakt', {
        title: "Strona kontakt",
    });
});

// Odbieranie danych z formularza
app.post('/kontakt', (req, res) => {
    const { pole1, pole2, imie, nazwisko, wiek } = req.body;

    // Przekierowanie na stronę /form z danymi z formularza
    res.redirect(`/form?pole1=${pole1}&pole2=${pole2}&imie=${imie}&nazwisko=${nazwisko}&wiek=${wiek}`);
});

// Strona, która wyświetla przesłane dane
app.get('/form', (req, res) => {
    const { pole1, pole2, imie, nazwisko, wiek } = req.query;

    // Wyświetlenie danych z formularza
    res.render('form', {
        content: `Witaj, ${imie} ${nazwisko}`,
        wiek: `Urodziłeś się w roku ${wiek}`,
        litery: `Pole 1: ${pole1} ma ${pole1.length} liter, pole 2: ${pole2} ma ${pole2.length} liter`
    });
});

app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
});