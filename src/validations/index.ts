import { validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";

export const runValidation = (req:Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        let errorList = errors.array().map((error)=>error.msg);
        return res.status(400).json({errors: errorList})
    }
    next();

}