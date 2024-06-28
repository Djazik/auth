import React, { useEffect } from 'react'
import { useSignInMutation } from '../../context/api/userApi'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setToken, setUser } from '../../context/slices/authSlice'

const Login = () => {
    const [signIn, {data, isLoading,isSuccess}] = useSignInMutation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=> {
        if(isSuccess){
            // localStorage.setItem("x-auth-token", data?.data?.token)
            dispatch(setToken( data?.data?.token))
            dispatch(setUser( data?.data?.user))
            navigate("/admin")
        }
    }, [isSuccess])
    
    const handleLogIn = ()=>{
        signIn({UserName: "john32", password:"12345678"})
    }

  return (
    <div className='container'>
        <h2>Login</h2>
        <button className='login-button' onClick={handleLogIn} disabled={isLoading}> log in</button>
    </div>
  )
}

export default Login