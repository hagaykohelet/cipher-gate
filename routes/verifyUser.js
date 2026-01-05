import express from 'express'
import supabase from '../db/connection.js'
import { verifyPassword } from '../bcrypt/encryption.js'
import check from '../middleware/checkHeaders.js'
import { createToken } from '../token.js'

const verifyRoute = express()



verifyRoute.get('/', check, async (req, res) => {
    try {
        const { username, password } = req.headers
        console.log(username, password);
        const { error, data } = await supabase.from("users").select().eq("username", username)
        if (data.length === 0) {
            return res.status(404).send("user not found!")
        }
        const check = await verifyPassword(password, data[0].hash_password)
        if (check) {
            const token = createToken(username)
            return res.status(200).json({ status: "verified", token: token })
        }
        return res.status(401).send("unauthorized")
    } catch (err) {
        res.status(500).send(String(err))
    }
})




export default verifyRoute