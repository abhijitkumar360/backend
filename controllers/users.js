
let users=[]// this will act as a user table(database)..later will

export const getUsers= (req,res)=>{
    console.log("in function call getUser... i this /users endpoint")
    res.send(users)
}
export const createUser= (req,res)=>{
    console.log("in function call creatUser... i this /users endpoint")
    res.send(users)
}