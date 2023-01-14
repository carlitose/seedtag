import express  from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.post('/endpoint', (req: express.Request, res: express.Response) => {
    const jsonBody = req.body;
    console.log(jsonBody);
    res.send('JSON ricevuto');
});

app.listen(3000, () => {
    console.log('Server in esecuzione sulla porta 3000');
});
