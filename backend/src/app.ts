import express from 'express';
import morgan from 'morgan'; 
import path from 'path';
import cors from 'cors';

const app = express();

import seguimientoRoutes from './routes/index';
import personaRoutes from './routes/routes.persona'

//settings
app.set('port', process.env.PORT || 4000); 

//middlewares
app.use(morgan('dev'));
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json()); 

//routes
app.use('/',seguimientoRoutes); 
app.use('/',personaRoutes); 


export default app;
