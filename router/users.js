import express from 'express';
import {getUsers,createUser} from '../controllers/users.js'

const router=express.Router();

router.get("/",getUsers)
// router.get("/id",getUserByID)
router.post("/",createUser)
// router.delete("/id",deleteUserById)
// router.patch("/id",updateUserById)
// router.put("/id",updateUser)


export default router