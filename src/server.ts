import express, { NextFunction, Request, Response } from "express";
import chalk from "chalk";
import morgan from "morgan";
import cors from "cors";


import { connectDB } from "./config/db";
import userRoute from "./routes/user";
import categoryRoute from "./routes/category";

const port = 5001;
const app = express();

app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/users/", userRoute);
app.use("/api/categories/", categoryRoute);

app.use((req: Request, res: Response, next: NextFunction)=>{
    return res.status(404).json({
        success: false,
        message: "Route not found.."
    })
})

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    return res.status(500).json({
        success: false,
        message: err.message
    })
})

app.listen(port, async ()=>{
    console.log(chalk.blueBright(`server running at http://localhost:${port}`));
    await connectDB();
});