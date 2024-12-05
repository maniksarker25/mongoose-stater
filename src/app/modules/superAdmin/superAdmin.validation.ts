import { z } from 'zod';

export const updateSuperAdminSchema = z.object({
  name: z.string().nonempty('Name is required').optional(),
  username: z.string().nonempty('Username is required').optional(),
  phone: z.string().optional(),
  email: z
    .string()
    .email('Invalid email format')
    .nonempty('Email is required')
    .optional(),
  address: z.string().optional(),
  profile_image: z.string().optional().default(''),
});

const superAdminValidations = {
  updateSuperAdminSchema,
};

export default superAdminValidations;
