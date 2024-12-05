/* eslint-disable @typescript-eslint/no-explicit-any */
import { Types } from "mongoose";

export interface INormalUser {
    inviteToken: any;
    user:Types.ObjectId;
    name:string;
    username:string;
    phone:string;
    email:string;
    address:string;
    profile_image:string;
    totalAmount:number;
    totalPoint:number;
}