import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());


app.use(routes) ;


app.listen(3333);


// GET:BUSCAR OU LISTAR INFORMAÇÃO
//POST : CRIAR ALGUMA NOVA INFORMAÇÃO
//PUT:ATUALIZAÇÃO UMA INFORMÇÃO 
//DELETE: DELETAR UMA INFORMAÇÃO 