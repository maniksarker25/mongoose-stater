/* eslint-disable @typescript-eslint/no-explicit-any */
// import jwt, { JwtPayload } from 'jsonwebtoken';
// import config from '../config';
// import AppError from '../error/appError';
// import httpStatus from 'http-status';
// import { USER_ROLE } from '../modules/user/user.constant';
// import NormalUser from '../modules/normalUser/normalUser.model';
// import Player from '../modules/player/player.model';
// import Team from '../modules/team/team.model';
// import SuperAdmin from '../modules/superAdmin/superAdmin.model';
// import { NextFunction, Request, Response } from 'express';
// const simpleAuth = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const token = req.headers.authorization;

//     if (!token) {
//       return next();
//     }

//     if (token) {
//       // Verify token
//       let decoded;

//       try {
//         decoded = jwt.verify(
//           token,
//           config.jwt_access_secret as string,
//         ) as JwtPayload;
//       } catch (err) {
//         throw new AppError(httpStatus.UNAUTHORIZED, 'Token is expired');
//       }
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       const { id, role } = decoded;

//       let profileData;
//       if (role === USER_ROLE.user) {
//         profileData = await NormalUser.findOne({ user: id }).select('_id');
//       } else if (role === USER_ROLE.player) {
//         profileData = await Player.findOne({ user: id }).select('_id');
//       } else if (role === USER_ROLE.team) {
//         profileData = await Team.findOne({ user: id }).select('_id');
//       } else if (role === USER_ROLE.superAdmin) {
//         profileData = await SuperAdmin.findOne({ user: id }).select('_id');
//       }
//       decoded.profileId = profileData?._id;
//       req.user = decoded as JwtPayload;
//     }

//     next();
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// };

// export default simpleAuth;

import jwt, { JwtPayload } from 'jsonwebtoken';
import NormalUser from '../modules/normalUser/normalUser.model';
import Player from '../modules/player/player.model';
import Team from '../modules/team/team.model';
import SuperAdmin from '../modules/superAdmin/superAdmin.model';
import { NextFunction, Request, Response } from 'express';
import { USER_ROLE } from '../modules/user/user.constant';
import config from '../config';

const simpleAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return next(); // Continue if no token is provided
    }

    let decoded: JwtPayload | null = null;

    try {
      // Verify token to check validity
      decoded = jwt.verify(
        token,
        config.jwt_access_secret as string,
      ) as JwtPayload;
    } catch (err: any) {
      // If token expired, decode without verifying
      if (err.name === 'TokenExpiredError') {
        decoded = jwt.decode(token) as JwtPayload | null;
      } else {
        return next(); // Ignore other errors
      }
    }

    if (decoded) {
      const { id, role } = decoded;

      let profileData = null;
      if (role === USER_ROLE.user) {
        profileData = await NormalUser.findOne({ user: id }).select('_id');
      } else if (role === USER_ROLE.player) {
        profileData = await Player.findOne({ user: id }).select('_id');
      } else if (role === USER_ROLE.team) {
        profileData = await Team.findOne({ user: id }).select('_id');
      } else if (role === USER_ROLE.superAdmin) {
        profileData = await SuperAdmin.findOne({ user: id }).select('_id');
      }

      if (profileData) {
        decoded.profileId = profileData._id;
      }

      req.user = decoded;
    }

    next(); // Proceed to the next middleware
  } catch (error) {
    console.log(error);
    next(); // Ignore errors and proceed
  }
};

export default simpleAuth;
