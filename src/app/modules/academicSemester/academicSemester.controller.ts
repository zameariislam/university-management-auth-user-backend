import { RequestHandler } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import sendResponse from '../../shared/sendResponse';
import { IAcademicSemester } from './academicSemester.interface';

const createSemester: RequestHandler = async (req, res, next) => {

  try{

    const result = await AcademicSemesterService.createSemester(
      req.body
    );

  
    sendResponse <IAcademicSemester> (res, {
      success:true,
      message:"Academic semester is created successfully",
      statusCode:200,
      data:result

    })

    next()

  }
  catch(error){

    console.log('Error from controller')
    next(error)

  }
  
 
};

export const AcademicSemesterController = {
  createSemester,
};
