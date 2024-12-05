import httpStatus from 'http-status';
import { ISuperAdmin } from './superAdmin.interface';
import AppError from '../../error/appError';
import SuperAdmin from './superAdmin.model';

const updateSuperAdminProfile = async (
  id: string,
  payload: Partial<ISuperAdmin>,
) => {
  if (payload.email || payload.username) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'You can not change the email or username',
    );
  }
  const user = await SuperAdmin.findById(id);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'Profile not found');
  }
  const result = await SuperAdmin.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const SuperAdminServices = {
  updateSuperAdminProfile,
};

export default SuperAdminServices;
