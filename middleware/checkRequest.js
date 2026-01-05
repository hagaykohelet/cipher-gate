export default function checkRequest (req, res, next){
    const newObj = req.body
    if(!newObj){
        return res.status(400).send("please enter some object")
    }
    if (typeof newObj !== "object"){
        return res.status(400).send("please enter object type")
    }
    let objKeys = Object.keys(newObj)
    if(objKeys.length !== 2){
        return res.status(404).send("not valisd keys!")
    }
    if(!(objKeys.includes("username"))|| !(objKeys.includes("password"))){
        return res.status(400).send("those keys not valid!")
    }
    if(typeof newObj.username !== "string" || typeof newObj.password !== "string"){
        return res.status(400).send("you need enter e string type")
    }
    return next()
}