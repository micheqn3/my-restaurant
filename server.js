const express = require('express');
const app = express();
const port = process.env.PORT || 3000
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

app.post('/api', (req, res) => { // Handles posting form data
    const data = req.body;
    console.log(data)
    reservations.push(data)

})

app.get('/api/tables', (req, res) => { // Shows the 5 first 5 reservations
    let first5 = reservations.slice(0,5)
    res.json(first5)
})

app.get('/api/waitlist', (req, res) => { // Shows the wait list
    let waitList = reservations.slice(5)
    res.json(waitList);
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
});

