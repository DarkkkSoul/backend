import express from 'express'

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('server is ready');
});

app.get('/details', (req, res) => {

    const details = [
        {
            id: 1,
            name: 'Mahesh'
        },
        {
            id: 2,
            name: 'Gopi'
        },
        {
            id: 3,
            name: 'Hrittik'
        },
        {
            id: 4,
            name: 'Madhan'
        },
    ];

    res.send(details);

});



app.listen(port, () => {
    console.log(`Server ready at port: http://localhost:${port}/`);
});