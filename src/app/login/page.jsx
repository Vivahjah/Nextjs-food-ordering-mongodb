"use client"
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { signIn } from "next-auth/react";

const Loginpage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [loginInProgress, setLoginInProgress] = useState(false)

    const HandleLogin = async (e) => {
        e.preventDefault();
        setError(false)
        setLoginInProgress(true)

        try {
            await signIn('credentials', { email, password, callbackUrl: "/" });
        } catch (error) {
            setError(true)
            setLoginInProgress(false)
        }
    }



    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">
                Login
            </h1>

            {error && (
                <div className="my-4 text-center">
                    An error has occurred. <br /> Try again later.
                </div>
            )}
            <form className="block mt-6 max-w-xs mx-auto" onSubmit={HandleLogin}>
                <input type="email" name='email' placeholder="email" disabled={loginInProgress} value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name='password' placeholder="password" disabled={loginInProgress} value={password} onChange={(e) => setPassword(e.target.value)} />
                <button disabled={loginInProgress} type="submit">Login</button>
            </form>
                <div className="my-4 text-center text-gray-500">or login with providers</div>
                <button type='button'  onClick={() => signIn('google', { callbackUrl: "/" })} className="flex items-center justify-center gap-3 w-80 mx-auto">
                    <Image src="/google.png" width={20} height={20} alt="google" />
                    Login with Google
                </button>
            <div className="text-center my-4 text-gray-400">
                Do not have any Accounts?{' '} <Link className="underline" href={'/register'}>Register &raquo;</Link>
            </div>

        </section>
    )
}

export default Loginpage