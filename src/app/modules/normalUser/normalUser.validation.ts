import { z } from 'zod';

export const createNormalUserSchema = z.object({
  body: z.object({
    password: z
      .string({ required_error: 'Password is required' })
      .min(6, { message: 'Password must be 6 character' }),
    confirmPassword: z
      .string({ required_error: 'Confirm password is required' })
      .min(6, { message: 'Password must be 6 character' }),
    userData: z.object({
      name: z.string().nonempty('Name is required'),
      phone: z.string().optional(),
      email: z.string().email('Invalid email format'),
      address: z.string().nonempty('Address is required').optional(),
    }),
  }),
});
export const updateNormalUserData = z.object({
  body: z.object({
    name: z.string().nonempty('Name is required').optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
  }),
});

const normalUserValidations = {
  createNormalUserSchema,
  updateNormalUserData,
};

export default normalUserValidations;
