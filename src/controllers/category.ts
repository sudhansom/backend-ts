import { Request, Response, NextFunction } from "express";
import slugify from "slugify";

import Category from "../models/category";

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
   try {
        const { name } = req.body;
        const existingCategory = await Category.findOne({name});
        if(existingCategory){
            return res.status(400).json({message: "category already exists"});
        }
        const newCategory = new Category({
            name,
            slug: slugify(name),
        })
        await newCategory.save();
        return res.status(201).json({ message: "category created"});
   }catch(err){
    return next(err);
   }
}