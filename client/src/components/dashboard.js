import {useEffect,useState} from 'react';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
function Dash() {
    const [re,setre]=useState(false);
    const [userinfo, setuserinfo] = useState('')

    useEffect(async()=>{
        const user=await axios.post('http://localhost:9000/dash',{
            token:localStorage.getItem('token')
        });
        setuserinfo(user.data);
    })
    return (
        <div className="dash">
            <h1>dashboard</h1>
            <h1>{userinfo.user_name}</h1>
            <h2>{userinfo.user_email}</h2>
            <Button variant='contained' style={{padding:'15px',margin:'15px',background:'red',color:'white'}} onClick={async()=>{
                await localStorage.removeItem('token');
                setre(true);
            }}>Log out</Button>
            {(!localStorage.getItem('token'))?<Redirect to={'/login'}></Redirect>:<span></span>}
        </div>
    );
}

export default Dash;
