import express from 'express';
import { UserRoutes } from '../user/user.route';
import { SemesterRoutes } from '../modules/academicSemester/academicSemester.route';

const router = express.Router();


const moduleRoutes = [
  { path: '/users', route: UserRoutes },
  { path: '/academic-semesters', route: SemesterRoutes },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
