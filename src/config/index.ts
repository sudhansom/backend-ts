import dotenv from "dotenv";

dotenv.config();

export const dev = {
    app: {
        jwtSecretKey:process.env.JWT_SECRET_KEY
    },
    db: {
        mongoUrl: process.env.MONGO_URL || ''   // "mongodb+srv://mtU1p265AJ28Kjoc:mtU1p265AJ28Kjoc@cluster0.3wccq.mongodb.net/backend-ts"
    }
}