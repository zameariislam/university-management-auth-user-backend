import { ApiError } from '../../../errors/ApiError';
import { academicSemesterTitleCodeMapper } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicsemester.model';
import httpStatus from 'http-status';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester | null> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
  
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester Code !');
  }

  const result = await AcademicSemester.create(payload);

  return result;
};

export const AcademicSemesterService = {
  createSemester,
};
