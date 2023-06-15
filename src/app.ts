import express, { Application} from 'express';
import cors from 'cors';

import { globalErrorHandler } from './app/middleware/globalErrorHandler';



import routes from './app/routes';


const app: Application = express();

// parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// application routes

app.use('/api/v1', routes);





app.use(globalErrorHandler);



     



export default app;
