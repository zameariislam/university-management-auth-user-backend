import { IGenericErrorResponse } from '../interfaces/common';
import { IGenericErrorMessage } from '../interfaces/error';
import { ZodError } from 'zod'

export const handleZodError = (error:ZodError): IGenericErrorResponse => {
    // console.log(error)

    const errors: IGenericErrorMessage[] =  error.issues.map((issue=>{
        // console.log(issue.path[1])

           
        return {
            message:issue?.message,
            path:issue?.path[issue.path.length-1]
        }

    }))
    // console.log(errors)


   const statusCode = 400;
//    console.log("errorsMessage",errors)

  return {
    statusCode,
    message: 'validation Error',
    errorMessages: errors,
  };
};
