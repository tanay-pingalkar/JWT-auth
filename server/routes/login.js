const router =require('express').Router();
const pool= require('../DB/db');
const bcrypt = require('bcrypt');
const jwtgen=require('../utils/jwtGen');


router.post('/',async (req,res)=>{
    try{
        //!destructure
        const {email, password}=req.body;

        //*check if the email is already taken or not
        const user=await pool.query('SELECT * FROM users WHERE user_email= $1',[email]);
        if(user.rows.length===0){
            res.send('email or password is incorrect')
        }

        //*compare
        const is=await bcrypt.compare(password,user.rows[0].user_password);

        if(!is) res.send('email or password is incorrect')
        //* generating token
        const token =await jwtgen(user.rows[0].id);
        console.log(token);
        res.send(token);
    }
    catch (error){
        console.error(error.message);
        res.status(500).send(error.message)
    }
});
module.exports=router;