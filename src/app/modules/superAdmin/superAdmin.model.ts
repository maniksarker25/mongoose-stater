import { model, Schema } from 'mongoose';
import { ISuperAdmin } from './superAdmin.interface';

const superAdminSchema = new Schema<ISuperAdmin>({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    // unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  profile_image: {
    type: String,
    default: '',
  },
},{
  timestamps:true
});
const SuperAdmin = model<ISuperAdmin>('SuperAdmin', superAdminSchema);

export default SuperAdmin;
