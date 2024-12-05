import { Request, Response } from 'express';
import { z } from 'zod';
import sendEmail from '../utilities/sendEmail';

const contactUsValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z.string({ required_error: 'Email is required' }),
    phone: z.string({ required_error: 'Phone number is required' }),
    message: z.string({ required_error: 'Message is required' }),
  }),
});

const sendContactUsEmail = async (req: Request, res: Response) => {
  try {
    // Validate the request body
    contactUsValidationSchema.parse(req);

    const { name, phone, email, message } = req.body;

    await sendEmail({
      email: 'devsmanik@gmail.com',
      subject: 'Contact Us Info',
      html: `
        <h2>New Contact Us Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ message: 'Contact email sent successfully' });
  } catch (error) {
    // Narrowing the error type
    const errorMessage =
      error instanceof Error ? error.message : 'An unexpected error occurred';
    res.status(400).json({ error: errorMessage });
  }
};

export default sendContactUsEmail;
