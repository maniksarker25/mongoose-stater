import jwt, { JwtPayload } from 'jsonwebtoken';
import { TUserRole } from './user.interface';

export const createToken = (
  // jwtPayload: { id: string; email: string; role: TUserRole },
  jwtPayload: { id: string; email: string; role: TUserRole },
  secret: string,
  expiresIn: string,
) => {
  const token = jwt.sign(jwtPayload, secret, {
    expiresIn: expiresIn,
  });
  return token;
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};
