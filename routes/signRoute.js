import express from 'express'
import supabase from '../db/connection.js'
import { hashPassword } from '../bcrypt/encryption.js'
import checkRequest from '../middleware/checkRequest.js'
const signRoute = express()


signRoute.post('/', checkRequest, async (req, res) => {
    try {
        const { username, password } = req.body
        const hash = await hashPassword(password)
        await supabase.from("users").insert({ username: username, hash_password: hash })
        res.status(200).send(`User: ${username} signup`)
    } catch (err) {
        res.status(400).send(String(err))
    }
})



export default signRoute
