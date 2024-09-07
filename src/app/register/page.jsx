"use client"
import axios from "axios";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [creatingUser, setCreatingUser] = useState(false)
    const [userCreated, setUserCreated] = useState(false)
    const [error, setError] = useState(false)


    const HandleRegister = async (e) => {
        e.preventDefault();
        setCreatingUser(true)
        setUserCreated(false)
        setError(false)

        try {
             await axios.post('/api/register', { email, password });            
            setCreatingUser(false)
            setUserCreated(true)


        } catch (error) {
            console.log(error);
            setCreatingUser(false)
            setError(true)
        }
    }



    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">
                Register
            </h1>
            {userCreated && (
                <div className="my-4 text-center">
                    User created. <br /> Now you can {' '} <Link className="underline" href={'/logi'}>Login &raquo;</Link>
                </div>
            )} 
            {error && (
                <div className="my-4 text-center">
                    An error has occurred. <br /> Try again later.
                </div>
            )}
            <form className="block mt-6 max-w-xs mx-auto" onSubmit={HandleRegister}>
                <input type="email" placeholder="email" disabled={creatingUser} value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" disabled={creatingUser} value={password} onChange={(e) => setPassword(e.target.value)} />
                <button disabled={creatingUser} type="submit">Register</button>
            </form>
                <div className="my-4 text-center text-gray-500">or login with providers</div>
                <button type="button" onClick={() => signIn('google', { callbackUrl: "/" })} className="flex items-center justify-center gap-3 w-80 mx-auto">
                    <Image src="/google.png" width={20} height={20} alt="google" />
                    Login with Google
                </button>
            <div className="text-center my-4 text-gray-400">
                Existing Accounts?{' '} <Link className="underline" href={'/login'}>Login &raquo;</Link>
            </div>

        </section>
    )
}

