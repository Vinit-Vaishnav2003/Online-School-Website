import React from 'react'
import './login.css'


function Login() {
  return (
    <div className='login template d-flex justify-content-center align-items-center  vh-100 bg-#198754'>
      <div className='form_container p-5 rounded bg-white shadow-lg '>
          <form>
          <h3 className='text-center'>Log In </h3>
            <div className='mb-2'>
            <label htmlFor="text">User Id </label>
            <input type="text" placeholder='Enter userid' className='form-control' />
            </div>
          <div className='mb-2'>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter Password' className='form-control'></input>
          </div>
          <div>
            
          </div>
          <div className='d-grid'>
            <button className='btn btn-primary'>Log In</button>

          </div>
          <p className='text-right'>
          
              Forget <a href="">Password</a>
          </p>
          </form>
      </div>
    </div>
  )
}

export default Login
