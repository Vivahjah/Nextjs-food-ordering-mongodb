"use client"
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function RegisterPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [creatingUser, setCreatingUser] = useState(false)
    const [userCreated, setuserCreated] = useState(false)


    const HandleRegister = async (e) => {
        e.preventDefault();
        setCreatingUser(true)
    
        try {
            const response = await axios.post('/api/register', { email, password });
            console.log(response);
            setCreatingUser(false)
            
            
        } catch (error) {
            console.log(error);
            setCreatingUser(false)
        }
    }
    

  
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">
                Register
            </h1>
            <form className="block mt-6 max-w-xs mx-auto" onSubmit={HandleRegister}>
                <input type="email" placeholder="email" disabled={creatingUser} value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" disabled={creatingUser} value={password} onChange={(e) => setPassword(e.target.value)} />
                <button password type="submit">Register</button>
                <div className="my-4 text-center text-gray-500">or login with providers</div>
                <button className="flex items-center justify-center gap-3">
                    <Image src="/google.png" width={20} height={20} alt="google" />
                    Login with Google
                </button>
            </form>
            
        </section>
    )
}

