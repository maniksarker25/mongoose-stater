import twilio from 'twilio';
import config from '../config';
import AppError from '../error/appError';
import httpStatus from 'http-status';

const client = twilio(config.twilio.accountSid, config.twilio.authToken);
const sendSMS = async (to: string, message: string) => {
  try {
    await client.messages.create({
      body: message,
      from: config.twilio.phoneNumber,
      to: to,
    });
    return {
      invalid: false,
      message: `Message sent successfully to ${to}`,
    };
  } catch (error) {
    throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to send sms');
  }
};

export default sendSMS;
