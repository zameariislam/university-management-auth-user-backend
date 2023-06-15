
import { UserService } from './user.service'
import { catchAsync } from '../shared/catchAsync'
import { NextFunction, Request, Response } from 'express'
import sendResponse from '../shared/sendResponse'
import { IUser } from './user.interface'


const createUser = catchAsync(async (req:Request, res:Response, next:NextFunction) => {
  
   

  const result = await UserService.createUser(req.body)


  sendResponse <IUser> (res, {
    success:true,
    message:" User is created successfully",
    statusCode:200,
    data:result

  })

  
  next()

})

export const UserController = {
  createUser,
}
