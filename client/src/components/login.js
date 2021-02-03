import {useEffect,useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import {BrowserRouter as Router, Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function Login() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [re,setre]=useState(false);
    const login=async()=>{
        const token=await axios.post('http://localhost:9000/login',{
            email:email,
            password:password
        });
        console.log(token);
        if(token.data==='email or password is incorrect'){
            alert(token.data)
        }
        else{
            localStorage.setItem('token',token.data);
            setre(true);
        }
    }

    return (
        <div className="App">
            <form className='form'>
                <TextField id="outlined-basic" label="email" variant="outlined" onChange={e=>setemail(e.target.value)} style={{'margin':'20px'}}></TextField>
                <TextField id="outlined-basic" label="password" variant="outlined" onChange={e=>setpassword(e.target.value)} style={{'margin':'20px'}}></TextField>
                <Button variant="contained" color="primary" onClick={()=>{login()}} style={{'margin':'20px',padding:'15px'}}>login</Button>
                <br></br><h4>or</h4><br></br>
                <Link to={'/register'}>
                    <Button variant="contained" color="primary" style={{'margin':'20px',padding:'15px'}}>Register</Button>
                </Link>
            </form>
            {(localStorage.getItem('token'))?<Redirect to={'/'}></Redirect>:<span></span>}
        </div>
    );
}

export default Login;
