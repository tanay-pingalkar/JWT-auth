const router =require('express').Router();
const pool= require('../DB/db');
const bcrypt = require('bcrypt');
const jwtgen=require('../utils/jwtGen');

router.post('/' ,async (req,res)=>{
    try{
        //!destructure req.body
        const {name,email,password}=req.body;
        //*check if the email is already taken or not
        const user=await pool.query('SELECT * FROM users WHERE user_email= $1',[email]);
        if(user.rows.length!==0){
            res.send('email is already in use')
        }
        
        //!bcrypting password
        const saltRounds = 10;
        const salt=await bcrypt.genSalt(saltRounds);
        const hash=await bcrypt.hash(password,salt);

        //*inserting data
        const id=await pool.query("INSERT INTO users (user_name,user_email,user_password) VALUES ( $1, $2, $3) RETURNING *",[name,email,hash]);

        //* generating token
        const token =await jwtgen(id.rows[0].id);
        res.send(token);
    }
    catch (error){
        console.error(error.message);
        res.status(500).send(error.message)
    }
});
module.exports=router;