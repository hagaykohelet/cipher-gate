import express from 'express'
import signRoute from './routes/signRoute.js'
import verifyRoute from './routes/verifyUser.js'
import decodeMessage from './routes/decodeMessage.js'
const app = express()
const PORT = 3000
app.use(express.json())
app.use('/signup', signRoute)
app.use('/verify', verifyRoute)
app.use('/decode-message', decodeMessage)





app.listen(PORT, ()=>{
    console.log("server running....");
})



