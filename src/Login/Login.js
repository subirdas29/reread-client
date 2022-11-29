import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';


const Login = () => {

    const { logIn,googleSignIn  } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    // const [loginEmail,setLoginEmail] = useState('')

    // const [token] = useToken(loginEmail)
  
    const from = location.state?.from?.pathname || '/';

    const provider = new GoogleAuthProvider();
    
    const [error, setError] = useState('')

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data)
        setError('')
        logIn(data.email, data.password)
            // setError('')
            .then((result) => {
                const user = result.user;
                console.log(user)
                // setLoginEmail(data.email)
                getUserToken(data.email)
                navigate(from, {replace: true});
                
            })
            .catch((error) => {
                console.log(error.message)
                setError(error.message)
            });
    }
    const handleGoogleSignUp = event =>{
        googleSignIn(provider)
        .then((result) => {
           
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user)
            // setLoginEmail(user?.email)
             getUserToken(user?.email)
           
            navigate(from, {replace: true});
           
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
         
          });
    }
    const getUserToken = email =>{
        fetch(`https://reread-server.vercel.app/jwt?email=${email}`)
        .then(res=> res.json())
        .then(data=>{
            if(data.accessToken){
                localStorage.setItem('accessToken',data.accessToken)
                navigate(from, {replace: true});
            }
        })
      }


    return (
        <div className='flex justify-center items-center h-[600px] my-10'>
        <div className='w-96 p-7'>
            <p className='text-center text-5xl font-bold'>Login</p>
            <form onSubmit={handleSubmit(handleLogin)}>
                
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl">Email</span>
                    </label>
                    <input type="text" {...register("email", { required: "Email Address is required" })} placeholder="Email" className="input input-bordered w-full" />
                    {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl">Password</span>
                    </label>
                    <input type="password" {...register("password",{ required: "Password is required",
                    minLength: { value: 6, message: "password must be 6 character or longer" },
                    pattern:{value:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,message:"Password must be strong"}
               
                })} placeholder="Password" className="input input-bordered w-full " />
                </div>
                <label className="label">
                        <span className="label-text">Forget Password?</span>
                    </label>
                    {errors.password && <p className="text-red-600" role="alert">{errors.password?.message}</p>}
                <input type="submit" className='btn btn-accent w-full mt-4' value='Login' />
            </form>
            <p className='mt-3 text-center'>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create New Account</Link></p>
            <div className="divider my-6">OR</div>
            <button type="submit" className='btn btn-outline w-full ' onClick={handleGoogleSignUp}>Continue with Google</button>
        </div>
    </div>
    );
};

export default Login;