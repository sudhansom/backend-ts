import { Router } from "express";
import { createCategory } from "../controllers/category";
import { categoryValidator } from "../validations/category";
import { runValidation } from "../validations";

const categoryRoute = Router();

categoryRoute.post("/", categoryValidator, runValidation, createCategory);

export default categoryRoute;