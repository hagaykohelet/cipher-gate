import 'dotenv/config'
import jwt from 'jsonwebtoken'

export function createToken(username){
    return jwt.sign({username:username}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXPIRES_IN})
}

export function decryptToken(token){
    return jwt.verify(token,process.env.JWT_SECRET)
}


