import express from 'express'
import message from '../middleware/checkMessage.js'
import supabase from '../db/connection.js'

const decodeMessage = express()

decodeMessage.post('/', message, async (req, res) => {
    try {
        const { username, message } = req.body
        const { data, error } = await supabase.from("users").select().eq("username", username)
        if (data.length === 0) {
            return res.status(404).send("this user not sign up!")
        }
        for (let i = 0; i < message.length - 1; i++) {
            if (Number(message[i]) > Number(message[i + 1])) {
                return res.status(400).send("this array not ascending order")
            }
        }
        let sum = 0
        message.forEach((element) => {
            sum += Number(element)
        });
        return res.status(200).send(sum)

    } catch (err) {
        res.status(400).send(String(err))
    }
})





export default decodeMessage