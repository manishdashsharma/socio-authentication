import asyncHandler from '../services/asyncHandler.js'
import CustomError from '../services/CustomError.js'

export const authenticateUser = asyncHandler( async(req,res) => {
    passport.authenticate('google', { scope: ['email', 'profile'] })
})