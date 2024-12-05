import express, { NextFunction, Request, Response } from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';
import validateRequest from '../../middlewares/validateRequest';
import superAdminValidations from './superAdmin.validation';
import SuperAdminController from './superAdmin.controller';
import { uploadFile } from '../../helper/fileUploader';

const router = express.Router();

router.patch(
  '/update-profile',
  auth(USER_ROLE.superAdmin),
  uploadFile(),
  (req: Request, res: Response, next: NextFunction) => {
    if (req.body.data) {
      req.body = JSON.parse(req.body.data);
    }
    next();
  },
  validateRequest(superAdminValidations.updateSuperAdminSchema),
  SuperAdminController.updateUserProfile,
);

export const superAdminRoutes = router;
