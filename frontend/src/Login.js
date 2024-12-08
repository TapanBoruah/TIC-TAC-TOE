import React from 'react'

function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <form action="">
            <div className='mb-3'>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter your email" className='form-control rounder-0'></input>
            </div>
            <div className='mb-3'>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter your password"  className='form-control rounder-0'></input>
                <p></p>
                <div>
                  New user? 
                </div>
                <button className='btn btn-success'>Log In</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
