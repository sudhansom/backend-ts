import { Router, Request, Response, NextFunction } from "express";

import { userValidator } from "../validations/user";
import { runValidation } from "../validations";
import { createUser, loginUser } from "../controllers/user";




const userRoute = Router();

userRoute.get("/", (req: Request, res: Response, next: NextFunction)=>{
    res.send("It's my own api")
});

userRoute.post("/user",userValidator, runValidation, createUser);
userRoute.post("/login", loginUser);


export default userRoute;