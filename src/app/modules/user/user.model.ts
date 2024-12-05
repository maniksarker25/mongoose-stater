import { Schema, model } from 'mongoose';
import { TUser, UserModel } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

const userSchema = new Schema<TUser>(
  {
    email: {
      type: String,
      required: function () {
        return this.role === 'user'; // Only required if the role is 'user'
      },
      // unique: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email address',
      ],
    },
    phone: {
      type: String,
      // unique: true,
    },
    password: {
      type: String,
      // required: true,
    },
    passwordChangedAt: {
      type: Date,
    },
    role: {
      type: String,
      enum: ['user', 'team', 'player', 'superAdmin'],
      required: true,
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    verifyCode: {
      type: Number,
    },
    resetCode: {
      type: Number,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isResetVerified: {
      type: Boolean,
      default: false,
    },
    codeExpireIn: {
      type: Date,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});
// statics method for check is user exists
userSchema.statics.isUserExists = async function (phoneNumber: string) {
  return await User.findOne({ phoneNumber }).select('+password');
};
// statics method for check password match  ----
userSchema.statics.isPasswordMatched = async function (
  plainPasswords: string,
  hashPassword: string,
) {
  return await bcrypt.compare(plainPasswords, hashPassword);
};

userSchema.statics.isJWTIssuedBeforePasswordChange = async function (
  passwordChangeTimeStamp,
  jwtIssuedTimeStamp,
) {
  const passwordChangeTime = new Date(passwordChangeTimeStamp).getTime() / 1000;

  return passwordChangeTime > jwtIssuedTimeStamp;
};

export const User = model<TUser, UserModel>('User', userSchema);
