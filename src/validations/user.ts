import { check } from "express-validator";

export const userValidator = [
    check("name")
        .trim()
        .notEmpty()
        .withMessage("Name is missing")
        .isLength({min: 3})
        .withMessage("name must have at lease 3 characters")
        .isLength({max: 30})
        .withMessage("name can have maximum 30 characters"),
    check("email")
        .trim()
        .notEmpty()
        .withMessage("Eamil is missing")
        .isEmail()
        .withMessage("Not a valid email"),
    check("password")
        .trim()
        .notEmpty()
        .withMessage("Password is missing")
        .isLength({min: 6})
        .withMessage("password must have at lease 3 characters")
        .isLength({max: 30})
        .withMessage("Password can have maximum 30 characters"),
]