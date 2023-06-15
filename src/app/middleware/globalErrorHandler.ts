import { ErrorRequestHandler } from "express"
import configure from "../../configure"
import { IGenericErrorMessage } from "../../interfaces/error";
import { handleValidationError } from "../../errors/handleValidationError";

import { handleZodError } from "../../errors/handleZodError";
import ApiError from "../../errors/ApiError";


export const globalErrorHandler:ErrorRequestHandler=(error, req,res, next) => {



    let statusCode=500;
    let message='Something Went  Wrong !';
    let errorMessages:IGenericErrorMessage[]=[]


    if(error?.name==="ValidationError"){
        
        const simplifiedError=handleValidationError(error)
        statusCode=simplifiedError.statusCode;
        message=simplifiedError.message;
        errorMessages=simplifiedError.errorMessages
    
    }
    else if(error.name==="ZodError"){
       
        const simplifiedError=handleZodError(error)
        //  console.log('from Zod', simplifiedError)
        statusCode=simplifiedError.statusCode;
        message=simplifiedError.message;
        errorMessages=simplifiedError.errorMessages
        
    }

    else if (error instanceof ApiError)  {
        
       
        statusCode = error.statusCode;
        message = error.message;
        errorMessages = error?.message
          ? [
              {
                path: '',
                message: error?.message,
              },
            ]
          : [];
      }

    else if(error instanceof Error ){
        console.log('I am from Error')
        message=error?.message;
        errorMessages= error?.message?[
            {
                message:error?.message,
                path:''

            }

        ]:[]

    }
   

    

    res.status(statusCode).json({
        
        success:'fail',
        message,
        errorMessages,
        stack:configure.node_env==="development"? error?.stack:undefined   
    })


    next()

  }