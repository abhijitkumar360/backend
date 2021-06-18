import {User} from '../models/user.js'
let users=[]// this will act as a user table(database)..later will

export const getUsers= (req,res)=>{
    console.log(req.query)
    console.log("in function call getUser()... i this /users endpoint")
    // res.send(users)
    User.find()
    .then(
        (result)=>{
            res.send(result)
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
}
export const createUser= (req,res)=>{
    console.log("in function call creatUser()... i this /users endpoint")
    //users.push(req.body)
    const user = new User({
        name:req.body.name,
        gender:req.body.gender,
        age:req.body.age,
        city:req.body.city,

    })
    user.save()
    .then(
        (result)=>{
            res.send(result)
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
    // res.send("ok")
}
// export const getUserByID= (req,res)=>{
//     console.log("in function call getUserByID()... i this /users endpoint")
//     res.send(users)
// }
export const getUserByID= (req,res)=>{
    console.log("in function call getUser()... i this /users endpoint")
    // res.send(users)
    User.findById(req.params.id)
        .then(
             (result)=>{
              res.send(result)
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
}
export const deleteUserById= (req,res)=>{
    console.log("in function call deleteUserById()... i this /users endpoint")
    // res.send(users)
    User.findByIdAndDelete(req.params.id)
        .then(
             (result)=>{
              res.send(result)
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
}

export const updateUserById = (req,res) => {    
    User.findByIdAndUpdate(req.params.id,{
        age: req.body.age,
        city: req.body.city 
    }) .then(
        (result)=>{
            res.send(result)
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
}
export const updateUser= (req,res)=>{
    console.log("in function call updateUser()... i this /users endpoint")
    Users.findByIdAndUpdate(req.params.id)
    const user = new User({
        name:req.body.name,
        gender:req.body.gender,
        age:req.body.age,
        city:req.body.city,

    })
}