import express from 'express';
import { Router, Request, Response } from 'express';
const port : number = 3333;
const app = express();
const route = Router();
app.use(express.json());
route.get('/', (req: Request, res: Response) => {
res.json(
{ message: `Minha primeira aplicação NodeJS` }
)
});
app.use(route);
app.listen(port, () => `Servidor rodando na porta ${port}`);