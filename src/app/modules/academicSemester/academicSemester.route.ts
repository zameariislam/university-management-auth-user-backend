
import express from 'express'
import { createAcademicSemesterZodSchema } from './academicSemester.validation'
import { validateRequest } from '../../middleware/validateRequest'
import { AcademicSemesterController } from './academicSemester.controller'



  const router=express.Router()

  
  router.post('/create-semester', 
  validateRequest(createAcademicSemesterZodSchema),
   AcademicSemesterController.createSemester)


  

  export  const SemesterRoutes=router

