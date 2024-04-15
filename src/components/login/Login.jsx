import React, { useState } from 'react';
import logo from '../../assets/images/xyma_logo.png';
import xyma_logo from '../../assets/images/xyma.png';
import '../login/login.scss';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async (event) => {
    event.preventDefault()

    const response = await fetch('http://192.168.0.100:4000/sensor/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    const data = await response.json();

    if (data.user) {
      localStorage.setItem('token', data.user)
      alert('Login Successful')
      window.location.href = '/'
    } else {
      alert('Error : Incorrect Email and Password ')
    }
  }

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center text-black bg-cyan-50 my-2 mx-5 md:mx-0 md:my-0">
      <div className="foreground">
      <div className="md:w-1/3 max-w-sm">
        <img src={xyma_logo} alt="Sample" />
      </div>
      <div className="md:w-1/3 max-w-sm form_login">
        <form onSubmit={loginUser}>
        <div className='flex item-center justify-center pb-8 pr-8'>
        <img src={logo} alt="logo" style={{width : '14rem',height : '7rem'}}/>
        </div>
        <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" placeholder="Email Address" />
        <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" placeholder="Password" />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            {/* <input className="mr-1" type="checkbox" />
            <span>Remember Me</span> */}
          </label>
        </div>
        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider " type="submit">Login</button>
        </div>
        </form>
      </div>
      </div>
    </section>
  );
}

export default Login;
