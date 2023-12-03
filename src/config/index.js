import dotenv from 'dotenv';

dotenv.config()

const config = {
    PORT : process.env.PORT || 5000,
    MONGODB_URL : process.env.MONGODB_URL || "mongodb://localhost:27017/socioauth",
    JWT_SECRET : process.env.JWT_SECRET || "yoursecret",
    JWT_EXPIRY : process.env.JWT_EXPIRY || "30d",
    CLIENT_ID : process.env.CLIENT_ID ,
    CLIENT_SECRET : process.env.CLIENT_SECRET,
    REDIRECT_URI : process.env.REDIRECT_URI
}

export default config