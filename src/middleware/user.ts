import { Request, Response, NextFunction } from "express";
const jwt = require('jsonwebtoken');
import { dev } from "../config";

import User from "../models/user";

interface ExtraRequest extends Request  {
 userId: string,
}

export const isLoggedIn = async (req: ExtraRequest , res: Response, next: NextFunction) => {
    try {
        if(!req.headers.authorization){
            return res.status(404).json({message: "no token found."})
        }
        const token = req.headers.authorization;
        const { _id } = jwt.verify(token, dev.app.jwtSecretKey);
        req.userId = _id;
        next();
    }catch(err:any){
        return res.status(401).json({message: err.message});
    }
}

export const isAdmin = async (req: ExtraRequest, res: Response, next: NextFunction) => {
    try {
        const existingUser = await User.findById({_id: req.userId});
        if(!existingUser){
            return res.status(404).json({message: "no user found. please login"});
        }
        if(!existingUser.isAdmin){
            return res.status(404).json({message: "User is not authorized..."});
        }
        next()
    }catch(err: any){
        return res.status(401).json({message: err.message})
    }
}