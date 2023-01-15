import express, {Response, Request} from 'express';
import bodyParser from 'body-parser';
import { celebrate, errors } from 'celebrate';

import { yvhRequestSchema } from './structure/schema'
import { calculate } from './calculate';

const app = express();
app.use(bodyParser.json());

app.post('/radar', celebrate({
    body: yvhRequestSchema
}), 
async (req: Request, res: Response) => {
    const jsonBody = req.body;
    console.log('New contact from the Alliance')
    const coordinate = calculate(jsonBody)
    console.log('For the force and Skywalker! Fire on ', coordinate)
    res.json(coordinate);
});

app.use(errors({statusCode:400}));

app.listen(8888, () => {
    console.log('The force is powerful on the port 8888');
});
 
export default app