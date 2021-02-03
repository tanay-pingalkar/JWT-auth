const router =require('express').Router();
const pool= require('../DB/db');
const auth =require('../middle/auth');

router.post('/' ,auth,async (req,res)=>{
    try{
        const user=await pool.query('SELECT user_name,user_email FROM users WHERE id= $1',[req.user]);
        res.send(user.rows[0]);
    }
    catch (error){
        console.error(error.message);
        res.status(500).send(error.message)
    }
});
module.exports=router;