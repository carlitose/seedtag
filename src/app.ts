import express from 'express';
import bodyParser from 'body-parser';
import Ajv from 'ajv';
import { schema } from './validator'

const app = express();
app.use(bodyParser.json());

const ajv = new Ajv();
const validate = ajv.compile(schema)

app.post('/radar', (req: express.Request, res: express.Response) => {
    const jsonBody = req.body;
    console.log('dio fa')
    if (!validate(jsonBody)) {
        console.log('sono qui')
        return res.status(400).json({ errors: validate.errors });
    }
    console.log(jsonBody);
    res.send('JSON ricevuto');
});

app.listen(3000, () => {
    console.log('Server in esecuzione sulla porta 3000');
});

export default app