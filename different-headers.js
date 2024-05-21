import express from 'express';

const app = express();
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
const port = process.env.NODE_SITE_PORT;

app.get('/', async (req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('Hello world');
});


app.get('/users', async (req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<h1>Mitesh vaghela</h1>')
    res.end();
})


app.get('/products', async (req, res) => {
    res.header({'Content-Type':'text/html'});
    res.status(200).send('<h1 style="text-align:center;">Hello world</h1>');
})

app.get('/api/orders', async (req, res) => {
    res.writeHead(500, {'Content-Type':'text/html'});
    res.write('<h1>Order 1 details</h1>')
    res.end();
})


app.listen(port, () => {
    console.log('App running on ', port);
});