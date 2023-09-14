import {Request, Response, NextFunction } from "express";
//import bcrypt from "bcrypt";
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

import User from "../models/user";
import { HttpError } from "../http-error/HttpError";
import { dev } from "../config";


export const createUser =  async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {name, email, address, password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            const error = new HttpError("User already exists", 222);
            return next(error);
        }
        const newUser = new User({
            name,
            email,
            address,
            password: await bcrypt.hash(password, 10)
        })
        newUser.save();
        const token = jwt.sign({_id: newUser._id}, dev.app.jwtSecretKey, {expiresIn: "20m"});
        res.status(200).json({message: 'User created.', token});
    } catch(error){
        return next(error);
    }
}

export const loginUser = async (req: any, res: Response, next: NextFunction) => {
    try {
        const token = req.body.token;
        if(!token){
            return res.status(404).json({message: "no token found"})
        }
        // jwt.verify(token, dev.app.jwtSecretKey, (err: any, decode:any)=>{
        //     if(err){
        //         return res.status(404).json({message: "token expired..."});
        //     }else
        //     return res.status(200).json({message: "token matched.."})
        // });
        const decode = jwt.verify(token, dev.app.jwtSecretKey);
        console.log(decode._id);
        req._id = decode._id;
        return res.status(200).json({message: "token matched..", aaa: req._id});
    }catch(err){
        return next(err);
    }
}

export const afterLogin = async (req: any, res: Response, next: NextFunction) => {
    console.log('request in afterLogin: ',req); // put id in req and see...
    res.status(200).json({message: "token matched.."});
}