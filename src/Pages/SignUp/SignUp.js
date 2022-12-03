import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';
// import useToken from '../../hooks/useToken';

const SignUp = () => {

    const { createUser, updateUser,googleSignIn } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const location = useLocation();
    const [createUserEmail,setCreateUserEmail] = useState('')
    const [token]= useToken(createUserEmail)
 

    if(token)
    {
        navigate(from, {replace: true});
    }


    const from = location.state?.from?.pathname || '/';

    const provider = new GoogleAuthProvider();


    const handleSignUp = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                toast('User successfully SignUp');
                const userInfo = {
                    displayName: data.name
                }
               
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email,data.select)

                    })
                    .catch((error) => {
                        console.log(error)
                    });
            })
            .catch((error) => {
                console.error('error', error)
            });
    }

    const handleGoogleSignUp = event =>{
        googleSignIn(provider)
        .then((result) => {
           
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            setCreateUserEmail(user?.email)
            // getUserToken(user?.email)
            saveUser = (user?.displayName,user?.email)
           
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
         
          });
    }

    const saveUser = (name,email,role)=>{
        const user = {name,email,role,status:'unverified'}
        fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
        'content-type':'application/json'
        },
        body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setCreateUserEmail(email) 
        })
        }
  

    return (
        <div className='flex justify-center items-center h-[600px] my-10'>
            <div className='w-96 p-7'>
                <p className='text-center text-5xl font-bold'>Sign Up</p>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-xl">Your Name</span>
                        </label>
                        <input type="text" {...register("name", { required: "Name is required" })} placeholder="Your Name" className="input input-bordered w-full" />
                        {errors.name && <p className="text-red-600" role="alert">{errors.name?.message}</p>}
                    </div>
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
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "password must be 6 character or longer" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" }

                        })} placeholder="Password" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl">Speciality</span>
                        </label>
                        <select className="select w-full max-w-xs input-bordered" {...register("select", { required: "select is required" })}>

                            <option defaultValue>User</option>
                            <option>Seller</option>

                        </select>
                    </div>
                    <label className="label">
                        <span className="label-text">Forget Password?</span>
                    </label>
                    {errors.password && <p className="text-red-600" role="alert">{errors.password?.message}</p>}
                    <input type="submit" className='btn btn-accent w-full mt-4' value='Sign Up' />
                </form>
                <p className='mt-3 text-center'>Already have an account  <Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="divider my-6">OR</div>
                <button type="submit" className='btn btn-outline w-full ' onClick={handleGoogleSignUp}>Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;