import { useState } from 'react';
import './login.css';
import { toast } from 'react-toastify';

const Login = () => {

    const [avatar, setAvatar] = useState({
        file: null,
        url:''
    })

    const handleAvatar = e => {
        e.target.files[0] &&
        setAvatar({
            file: e.target.files[0],
            url: URL.createObjectURL(e.target.files[0])
        })
    }   

    const handleLogin = e => {
        e.preventDefault();
        toast.success("Hello")
    }

    return <div className="loginPage">
        <div className="page">
            <h2>Welcome Back!</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder='Email' name='email' />
                <input type="password" placeholder='Password' name='password' />
                <button>Sign In</button>
            </form>
        </div>
        <div className="seperator">

        </div>
        <div className="page">
            <h2>Create an Account</h2>
            <form>
                <label htmlFor="file">
                    <img src={avatar.url || './avatar.png'} alt="" />
                    Upload Image</label>
                <input type="file" id='file' style={{display:'none'}} onChange={handleAvatar}/>
                <input type="text" placeholder='Username' name='username' />
                <input type="email" placeholder='Email' name='email' />
                <input type="password" placeholder='Password' name='password' />
                <button>Sign Up</button>
            </form>
        </div>
    </div>
}

export default Login;