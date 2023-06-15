import { NextFunction, Request, Response } from "express";
import { RequestHandler } from "express-serve-static-core";

  export const catchAsync=(fn:RequestHandler)=>{
    
    return  async (req:Request, res:Response, next:NextFunction) => {
        try {
            
            fn(req,res,next)
          
          
        } catch (error) {
            
            next(error)
         
        }
      }


  }