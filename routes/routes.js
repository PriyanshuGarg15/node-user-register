const express=require('express')
const router=express.Router()
const Controller=require('../controller/usercontroller')
//Routes
router.get('/',Controller.index)

 /**
  * @swagger
  * tags:
  *   name: Users
  *   description: The User Registering API
  */

/**
 * @swagger
 * /allusers:
 *   get:
 *     description: All Users
 *     responses:
 *       200:
 *         description: Returns all the Users
 *        
 */
router.get('/users',Controller.allUser)
router.post('/register',Controller.registerUser)
router.delete('/users/:id',Controller.deleteUser)
module.exports=router