const errorHandler=(err,req,res,next)=>{
    if (err.name === "MongoError") {
        return res.status(400).send({message:"duplicate key error. a value is already in the database",status:false})
    }
    else if (err.name === "Authentication error") {
        return res.status(401).send({message:"Authentication error",status:false})
    }
    else if (err.name === "Authorization error") {
        return res.status(403).send({message:"Authorization error",status:false})
    }
    else {
        return res.status(500).send({message:"internal server err",status:false})
    }
}

module.exports={errorHandler}