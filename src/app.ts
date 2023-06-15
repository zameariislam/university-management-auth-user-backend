import express, { Application, NextFunction, Request, Response} from 'express';
import cors from 'cors';

import { globalErrorHandler } from './app/middleware/globalErrorHandler';



import routes from './app/routes';
import httpStatus from 'http-status';


const app: Application = express();

// parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// application routes

app.use('/api/v1', routes);



app.use(globalErrorHandler);

app.use((req:Request,res:Response,next:NextFunction)=>{
    const originalUrl = req.originalUrl
    res.status(httpStatus.NOT_FOUND).json({
        success:false,
        message:"Not Found",
        errorMessages:[{
            path:originalUrl,
            message:'API Not Found'

        }]


       
    })
    next()
})



     



export default app;
