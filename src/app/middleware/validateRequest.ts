import { NextFunction, Request, Response } from 'express'
import { AnyZodObject } from 'zod'

export const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {

     

    try {
      await schema.parseAsync({
        body:req.body,
        query:req.query,
        cookies:req.cookies,
        params:req.params


      })
      next()

      // console.log(schema)
    } catch (error) {
        next(error)

    }
  }
}
