import { check } from "express-validator";

export const categoryValidator = [
    check("name")
        .trim()
        .notEmpty()
        .withMessage("Name is missing")
        .isLength({min: 3})
        .withMessage("name must have at lease 3 characters")
        .isLength({max: 30})
        .withMessage("name can have maximum 30 characters"),
]