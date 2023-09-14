import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "name is required"],
            minlength: 3,
            maxlength: 30,
            trim: true,
        },
        email: {
            type: String,
            required: [true, "email is required"],
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, "password is required"],
            minlength: 3,
            maxlength: 64,
            trim: true,
        },
        address: {
            type: String,
            trim: true,
        },
        isAdmin: {
            type: Number,
            dafault: 0,
        }
    },
    { timestamps: true }
)

const User = model("user", userSchema);
export default User;