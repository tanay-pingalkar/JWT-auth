const Pool=require('pg').Pool

const pool=new Pool({
    user:'postgres',
    password:'krutika24',
    host:'localhost',
    port:5432,
    database:'diary'
});

module.exports=pool;