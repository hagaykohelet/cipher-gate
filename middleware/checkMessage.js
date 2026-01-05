export default function message(req, res, next){
    if(!req.body){
        return res.status(400).send("please enter a n object")
    }
    const newObj = req.body
    if(typeof newObj !== "object"){
        return res.status(400).send("please enter some object type")
    }
    const objKeys = Object.keys(newObj)
    if(objKeys.length !== 2){
        return res.status(400).send("missing keys")
    }
    if(!(objKeys.includes("username"))|| !(objKeys.includes("message"))){
        return res.status(400).send("those keys not valid!")
    }
    if(!(Array.isArray(newObj.message))|| typeof newObj.username !== "string" ){
        return res.status(400).send("the type of fields not valid!")
    }
    return next()
    
}