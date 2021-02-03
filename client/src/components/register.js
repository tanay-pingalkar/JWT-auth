import {useEffect,useState} from 'react';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import '../App.css';

function Register() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [re,setre]=useState(false);
    const register=async (e)=>{
        e.preventDefault();
        const token=await axios.post('http://localhost:9000/auth',{
            name:name,
            email:email,
            password:password,
            
        });
        if(token.data==='email is already in use'){
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
                <TextField id="outlined-basic" label="name" variant="outlined" onChange={e=>setname(e.target.value)} placeholder='name' style={{'margin':'20px'}}></TextField>
                <TextField id="outlined-basic" label="email" variant="outlined"  onChange={e=>setemail(e.target.value)} placeholder='email'style={{'margin':'20px'}}></TextField>
                <TextField id="outlined-basic" label="password"  variant="outlined" onChange={e=>setpassword(e.target.value)} placeholder='password' style={{'margin':'20px'}}></TextField>
                <Button variant="contained" color="primary" onClick={e=>{register(e)}} style={{'margin':'20px',padding:'15px'}}>register</Button>
                <br></br><h4>or</h4><br></br>
                <Link to={'/login'}>
                    <Button variant="contained" color="primary" style={{'margin':'20px',padding:'15px'}}>Login</Button>
                </Link>
            </form>
            
            {(localStorage.getItem('token'))?<Redirect to={'/'}></Redirect>:<span></span>}
        </div>
    );
}

export default Register;
