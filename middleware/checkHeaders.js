export default function checkRequest(req, res, next) {
    const username = req.headers.username
    const password = req.headers.password
    if (!password || !username) {
        return res.status(400).send("missing fields")
    } return next()
}
