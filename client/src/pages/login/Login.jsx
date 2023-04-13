import './login.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className='loginForm'>
                <label>Email</label>
                <input type="email" className='loginInput' placeholder='Enter email' />
                <label>Password</label>
                <input type="password" className='loginInput' placeholder='Enter password' />
                <button className='loginButton'>Log In</button>
            </form>
            <button className='loginRegisterButton'><Link className="link" to = "/register">Register</Link></button>
        </div>
    )
}
