//*starting server
const express=require('express');
const app=express();
const PORT=process.env.PORT || 9000;
app.listen(PORT,err=>{
    if(err) return(err);
    else{
        console.log(`server has start on ${PORT}`);
    }
});
app.use((req,res, next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.setHeader('Access-Control-Allow-Headers',"*");
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

//!body parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//*routers
const jwtAuth=require('./routes/jwtAuth');
const login=require('./routes/login');
const dash=require('./routes/dashboard');
app.use('/auth',jwtAuth);
app.use('/login',login);
app.use('/dash',dash);



//!cors
const cors=require('cors');
app.use(cors);





 



