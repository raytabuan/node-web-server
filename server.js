const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

// Express Middleware functions
// This will stop everything from working since line is located above the other functions
// app.use((req, res, next) => {
//    res.render('maintenance.hbs');
// });

app.get('/', (req, res) => {
   // res.send('<h1>Hello from RAYT! </h1>');
   res.send({
      name: 'Robert Tabuan',
      address: ' Aroroy, Masbate',
      hobbies: [
         'boxing', 'singing', 'kickboxing', 'table tennins', 'basketball', 'arnis', 'martial arts'
      ]
   });
});

app.get('/about', (req, res) => {
   res.render('about.hbs', {
      pageTitle: 'About Page - rayt',
      currentYear: new Date().getFullYear()
   });
});

app.get('/bad', (req, res) => {
   res.send({
      errorMessage: 'Bad Request'
   });
});

app.listen(port, () => {
   console.log(`Server is up on port ${port}`);
});
