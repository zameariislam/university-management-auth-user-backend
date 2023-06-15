
import express from 'express'
import { UserController } from './user.controller'


import { validateRequest } from '../middleware/validateRequest'
import { createUserZodSchema } from './user.Validation'


  const router=express.Router()

  
  router.post('/create-user', validateRequest(createUserZodSchema),UserController.createUser)


  

  export  const UserRoutes=router

