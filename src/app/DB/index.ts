import mongoose from 'mongoose';
import config from '../config';
import { USER_ROLE } from '../modules/user/user.constant';
import { User } from '../modules/user/user.model';
import SuperAdmin from '../modules/superAdmin/superAdmin.model';

const superAdminData = {
  username: 'mradmin',
  name: 'Mr Admin',
  email: config.super_admin_email,
};

const seedSuperAdmin = async () => {
  // check when database is connected , we will check is there any user who is super admin
  const superAdminExits = await User.findOne({ role: USER_ROLE.superAdmin });
  if (superAdminExits) {
    console.log('Admin already exits');
    return;
  }
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const userDataPayload = {
      username: 'mradmin',
      email: config.super_admin_email,
      password: config.super_admin_password,
      role: USER_ROLE.superAdmin,
      isVerified: true,
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = await User.create([userDataPayload], { session });

    const superAdminPayload = {
      ...superAdminData,
      user: user[0]._id,
    };
    const result = await SuperAdmin.create([superAdminPayload], { session });

    await session.commitTransaction();
    session.endSession();
    console.log('Super Admin Created Successfully');
    return result[0];
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

export default seedSuperAdmin;
