import express, {Response, Request, NextFunction} from 'express';
import bodyParser from 'body-parser';
import { celebrate, errors, isCelebrateError } from 'celebrate';

import { yvhRequestSchema } from './structure/schema'

const app = express();
app.use(bodyParser.json());


app.post('/radar', celebrate({
    body: yvhRequestSchema
}), 
async (req: Request, res: Response) => {
    const jsonBody = req.body;
    res.send('JSON ricevuto');
});

app.use(errors({statusCode:400}));

app.listen(3000, () => {
    console.log('The force is powerful on the port 3000');
});
 
export default app