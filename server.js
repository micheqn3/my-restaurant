const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true })); // Sets up data parsing
app.use(express.json());

let reservations = []; // Will hold form data

app.get('/', (req, res) => { // Route to home page
    res.sendFile(__dirname + '/pages' + '/home.html');
})

app.get('/reserve', ( req, res) => { // Route to making reservations
    res.sendFile(__dirname + '/pages' + '/reserve.html')
})

app.get('/tables', (req, res) => { // Route to tables page
    res.sendFile(__dirname + '/pages' + '/tables.html')
})

app.get('/api', (req, res) => { // Route to tables page
    res.json(reservations)
})

app.post('/api', (req, res) => {
    const data = req.body;
    console.log(data)
    reservations.push(data)

})

// api 
// api/:tables
// api/:waitlist

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
});

