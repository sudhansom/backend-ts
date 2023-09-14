import { Schema, model } from "mongoose";

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "category name is required"],
            minlength: 3,
            maxlength: 12,
            trim: true,
        },
        slug: {
            type: String,
            trim: true
        },

    },
    {
        timestamps: true
    }
    );

const Category = model("Category", categorySchema);
export default Category;