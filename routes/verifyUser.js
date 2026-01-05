import express from 'express'
import supabase from '../db/connection.js'
import { verifyPassword } from '../bcrypt/encryption.js'
import checkRequest from '../middleware/checkRequest.js'

const verifyRoute = express()
verifyRoute.get('/',checkRequest,  async(req, res)=>{
    try{
        const{username, password} = req.headers
        console.log(username, password);
        const {error, data} = await supabase.from("users").select().eq("username", username)
        console.log(data);
        if(data.length === 0){
            return res.status(404).send("user not found!")
        }
        const check = await verifyPassword(password, data[0].hash_password)
        if(check){
            return res.status(200).send("verified")
        }
        return res.status(400).send("unauthorized")
    }catch(err){
        res.status(400).send(String(err))
    }
})




export default verifyRoute