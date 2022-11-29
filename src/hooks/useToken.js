import { useEffect, useState } from "react"

const useToken = email =>{
    const [token,setToken]= useState('')
    useEffect(()=>
    {
        if(email)
        {
            fetch(`https://reread-server.vercel.app/jwt?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data,'JOY')
            if(data.accessToken)
            {
              localStorage.setItem('accessToken',data.accessToken)
                setToken(data.accessToken)
            } 
            
        })
        }
    },[email])
    return [token];
}

export default useToken;