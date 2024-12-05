import { z } from 'zod';
import { ENUM_USER_STATUS } from '../../utilities/enum';

// Zod schema for user creation
export const registerUserValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required').max(100),
    email: z
      .string({ invalid_type_error: 'Please add a valid email' })
      .email('Invalid email format')
      .optional(),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    phone: z.string().min(1, 'Phone number is required').max(15).optional(),
  }),
});

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

const changePasswordValidationSchema = z.object({
  body: z.object({
    oldPassword: z.string({ required_error: 'Old password is required' }),
    newPassword: z.string({ required_error: 'Password is required' }),
  }),
});

// refresh token validation schema -----------
const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({ required_error: 'Refresh token is required' }),
  }),
});

// forget password validation schema
const forgetPasswordValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'User email is required' }),
  }),
});
// reset password validation schema
const resetPasswordValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'User email is required' }),
    newPassword: z.string({ required_error: 'New password is required' }),
  }),
});

const verifyCodeValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required' }),
    verifyCode: z.number({ required_error: 'Phone number is required' }),
  }),
});

const resendVerifyCodeSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required' }),
  }),
});

const changeUserStatus = z.object({
  body: z.object({
    status: z.enum(Object.values(ENUM_USER_STATUS) as [string, ...string[]]),
  }),
});

const deleteUserAccountValidationSchema = z.object({
  body: z.object({
    password: z.string({ required_error: 'Password is required' }),
  }),
});

const userValidations = {
  registerUserValidationSchema,
  loginValidationSchema,
  changePasswordValidationSchema,
  refreshTokenValidationSchema,
  forgetPasswordValidationSchema,
  resetPasswordValidationSchema,
  verifyCodeValidationSchema,
  resendVerifyCodeSchema,
  changeUserStatus,
  deleteUserAccountValidationSchema,
};

export default userValidations;
