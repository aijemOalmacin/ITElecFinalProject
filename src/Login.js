import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/login', {email, password })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    return(
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
            <div className='p-3 bg-white w-25'>
                <form onSubmit={handSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'>email</label>
                        <input type='email' placeholder='Enter email' className='form-control'
                        onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>password</label>
                        <input type='password' placeholder='Enter password' className='form-control'
                        onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Login</button>
                </form>
            </div>
        </div>
    )

}
export default Login